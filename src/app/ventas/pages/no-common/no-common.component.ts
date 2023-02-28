import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
})
export class NoCommonComponent {
  // i18nSelect
  name: string = 'Susana';
  genre: string = 'female';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    other: '',
  };

  // i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Juan', 'Luis'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  changeClient() {
    if (this.name === 'Santiago') {
      this.name = 'Susana';
      this.genre = 'female';
    } else {
      this.name = 'Santiago';
      this.genre = 'male';
    }
  }

  deleteClient() {
    this.clients.pop();
  }

  // key value pipe
  person = {
    name: 'Fernando',
    edad: 35,
    direccion: 'Otawa, Canadá'
  }

  // json pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    }, 
    {
      name: 'Batman',
      fly: true,
    },
    {
      name: 'Spiderman',
      fly: false,
    },
  ]

  // async pipe
  myObservable = interval(2000); // 0, 1, 2, 3, 4

  myPromise = new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve( console.log("Tenemos data de la promesa") );
    }, 3500);
  });
}
