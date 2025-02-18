import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../shared/services/country.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  imports: [CommonModule],
  selector: 'app-country-list',
  standalone: true,
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  countries$: Observable<string[]> = this.countryService.getCountries().pipe(
    map((data) => data.map((country) => country.name.common)),
    catchError((error) => {
      console.error('Error fetching countries:', error);
      return of([]);
    }),
  );

  constructor(private countryService: CountryService) {}
}
