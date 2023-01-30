import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {
  phraseLower: string = 'lowercase to uppercase letter';
  phraseUpper: string = 'UPPERCASE LETTER TO LOWERCASE';
  phraseFull: string = 'LetTER WitH ErrOrS';

  date: Date = new Date();
}
