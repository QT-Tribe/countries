import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  private readonly countryService = inject(CountryService);

  countries$: Observable<Country[]> = this.countryService.getCountries().pipe(
    map((countries) =>
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common)),
    ),
    catchError((error) => {
      console.error('Error fetching countries:', error);
      return of([]);
    }),
  );
}
