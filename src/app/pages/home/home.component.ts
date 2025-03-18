import { CardsComponent } from './../../shared/components/cards/cards.component';

import { Component, inject } from '@angular/core';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-home',
  imports: [CardsComponent, FilterComponent, SearchComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
