import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navLinks = document.querySelector('.nav-links') as HTMLUListElement;
    const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLDivElement;
    
    if (navLinks) {
      navLinks.classList.toggle('active', this.isMenuOpen);
    }
    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle('active', this.isMenuOpen);
    }
  }
}
