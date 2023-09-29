import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activeLink: number | null = null;

  setActiveLink(index: number) {
    this.activeLink = index;
  }

}
