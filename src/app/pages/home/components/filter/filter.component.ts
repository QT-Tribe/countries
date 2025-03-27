import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CountryService } from '../../../../shared/services/country.service';

@Component({
  selector: 'app-filter',
  imports: [],
  standalone: true,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  public regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public isOpen = false;
  public selectedRegion: string | null = null;

  private countryService = inject(CountryService);

  private elementRef = inject(ElementRef);

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  public selectRegion(region: string, event: Event): void {
    event.preventDefault();
    this.selectedRegion = region;
    this.isOpen = false;
    this.filterByRegion(region);
  }

  public clearFilter(event: Event): void {
    event.preventDefault();
    this.selectedRegion = null;
    this.isOpen = false;
    this.countryService.resetSearch();
  }

  public filterByRegion(region: string): void {
    this.countryService.filterByRegion(region);
  }

  public closeDropdown(): void {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  public clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
