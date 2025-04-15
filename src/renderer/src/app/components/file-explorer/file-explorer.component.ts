import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerService, FileItem } from '../../services/file-explorer.service';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FileExplorerComponent implements OnInit {
  currentPath: string = '';
  files: FileItem[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private fileExplorerService: FileExplorerService) {}

  ngOnInit(): void {
    this.selectDirectory();
  }

  selectDirectory(): void {
    this.loading = true;
    this.error = '';
    this.fileExplorerService.selectDirectory().subscribe({
      next: (path) => {
        this.currentPath = path;
        this.loadDirectory(path);
      },
      error: (err) => {
        this.error = 'Error selecting directory: ' + err.message;
        this.loading = false;
      }
    });
  }

  loadDirectory(path: string): void {
    this.loading = true;
    this.error = '';
    this.fileExplorerService.readDirectory(path).subscribe({
      next: (files) => {
        this.files = files.sort((a, b) => {
          if (a.isDirectory === b.isDirectory) {
            return a.name.localeCompare(b.name);
          }
          return a.isDirectory ? -1 : 1;
        });
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading directory: ' + err.message;
        this.loading = false;
      }
    });
  }

  navigateTo(path: string): void {
    if (path) {
      this.loadDirectory(path);
    }
  }

  formatSize(size: number): string {
    return this.fileExplorerService.formatFileSize(size);
  }
} 