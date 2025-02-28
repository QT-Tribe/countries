import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { CountryListComponent } from './country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountryListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'countries';
}
