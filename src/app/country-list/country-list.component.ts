import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { CommonModule } from '@angular/common';
import { map, Observable, tap } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-country-list',
  standalone: true,
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries: string[] = [];

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (data) => {
        this.countries = data.map((country) => country.name.common);
        console.log('Countries in component:', this.countries);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching countries:', error);
      },
    );
  }
}
