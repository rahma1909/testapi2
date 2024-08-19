import { Component, ElementRef, Input, input, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, FormsModule, MatToolbarModule, MatIconModule,RouterOutlet,RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {

  opened = false;

growHeight():any{
  this.opened=!this.opened


}
}
