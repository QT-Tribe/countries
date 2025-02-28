import { Injectable, signal, computed, effect } from '@angular/core';
import { ThemeMode } from '../interfaces/theme-mode.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme-preference';

  private themeSignal = signal<ThemeMode>(
    (localStorage.getItem(this.STORAGE_KEY) as ThemeMode) || 'light',
  );

  public theme = this.themeSignal.asReadonly();

  public isDarkMode = computed(() => this.themeSignal() === 'dark');

  constructor() {
    effect(() => {
      this.applyTheme(this.themeSignal());
    });
  }

  public toggleTheme(): void {
    const newTheme: ThemeMode =
      this.themeSignal() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  public setTheme(theme: ThemeMode): void {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.themeSignal.set(theme);
  }

  private applyTheme(theme: ThemeMode): void {
    // document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }
}
