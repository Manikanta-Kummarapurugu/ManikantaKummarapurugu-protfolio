import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@Component({
  selector: 'app-root',
  imports: [ToggleButtonModule, FormsModule, CommonModule, CardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}