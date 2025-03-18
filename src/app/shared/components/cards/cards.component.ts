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
  public readonly countryService = inject(CountryService);
}
