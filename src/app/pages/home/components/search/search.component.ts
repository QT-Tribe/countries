import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CountryService } from '../../../../shared/services/country.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private countryService = inject(CountryService);
  searchControl = new FormControl('');

  public constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        if (term) {
          this.countryService.searchCountries(term);
        } else {
          this.countryService.resetSearch();
        }
      });
  }
}
