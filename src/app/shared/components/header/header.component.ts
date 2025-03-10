import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemeMode } from '../../interfaces/theme-mode.type';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);

  public isDarkMode = this.themeService.isDarkMode;

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
