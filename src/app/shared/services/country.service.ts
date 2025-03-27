import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';
  private countriesSignal = signal<Country[]>([]);
  private allCountriesCache: Country[] = [];
  public countries = this.countriesSignal.asReadonly();

  constructor(private http: HttpClient) {
    this.loadAllCountries();
  }

  private loadAllCountries() {
    this.http.get<Country[]>(`${this.apiUrl}/all`).subscribe((countries) => {
      this.allCountriesCache = countries;
      const sortedCountries = this.sortCountries(countries);
      this.countriesSignal.set(sortedCountries);
    });
  }

  public searchCountries(term: string) {
    if (!term.trim()) {
      this.resetSearch();
      return;
    }

    const searchTerm = term.toLowerCase();
    const filtered = this.allCountriesCache.filter((country) => {
      const commonName = country.name.common.toLowerCase();
      const officialName = country.name.official.toLowerCase();
      const capital = country.capital?.[0]?.toLowerCase() || '';

      return (
        commonName.includes(searchTerm) ||
        officialName.includes(searchTerm) ||
        capital.includes(searchTerm)
      );
    });

    const sortedResults = this.sortCountries(filtered);
    this.countriesSignal.set(sortedResults);
  }

  public sortCountries(countries: Country[]): Country[] {
    return [...countries].sort((a, b) => {
      const regionCompare = a.region.localeCompare(b.region);
      if (regionCompare !== 0) return regionCompare;

      return a.name.common.localeCompare(b.name.common);
    });
  }

  public filterCountries(region: string | null) {
    let filtered = [...this.allCountriesCache];

    if (region) {
      filtered = filtered.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase(),
      );
    }

    const sortedFiltered = this.sortCountries(filtered);
    this.countriesSignal.set(sortedFiltered);
  }

  public resetSearch() {
    this.countriesSignal.set(this.sortCountries(this.allCountriesCache));
  }

  public filterByRegion(region: string) {
    if (!region) {
      this.resetSearch();
      return;
    }

    const filtered = this.allCountriesCache.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase(),
    );

    const sortedByRegion = this.sortCountries(filtered);
    this.countriesSignal.set(sortedByRegion);
  }
}
