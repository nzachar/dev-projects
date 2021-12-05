import { assassins } from './assassins';
import { Component } from '@angular/core';
import { Card } from 'ui-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-components';
  cards: Card[] = assassins;


  onCardChange(cards: Card[]) {
    this.cards = cards;
  }

  log(){
    console.log(this.title)
  }
}
