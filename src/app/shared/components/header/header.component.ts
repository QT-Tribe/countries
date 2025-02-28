import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemeMode } from '../../interfaces/theme-mode.type';

@Component({
  selector: 'app-header',
  standalone: true,

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public ngOnInit(): void {}

  constructor(public themeService: ThemeService) {}

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
