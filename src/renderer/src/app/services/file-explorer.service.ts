import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

declare const window: any;

export interface FileItem {
  name: string;
  path: string;
  isDirectory: boolean;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {
  constructor() { }

  readDirectory(path: string): Observable<FileItem[]> {
    return from(window.api.electronIpcInvoke('read-directory', path)) as Observable<FileItem[]>;
  }

  selectDirectory(): Observable<string> {
    return from(window.api.electronIpcInvoke('select-directory')) as Observable<string>;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
} 