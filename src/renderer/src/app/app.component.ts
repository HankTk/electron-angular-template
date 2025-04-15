import { Component } from '@angular/core';
import { IpcService } from './ipc.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { NavlistComponent } from './components/navlist/navlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterOutlet,
    NavlistComponent
  ]
})
export class AppComponent {
  title = 'My Electron Desktop';

  constructor(private ipcService: IpcService) {
  }

  clickDevTools() {
    this.ipcService.openDevTools();
  }
}
