import { Component } from '@angular/core';
import { CardsComponent } from "../../shared/components/cards/cards.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
