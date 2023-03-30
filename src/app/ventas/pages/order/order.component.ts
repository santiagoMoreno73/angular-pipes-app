import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  isUpper: boolean = false; 
  orderBy: string = '';
  heroes: Hero[] = [
    {
      name: 'Spiderman',
      fly: false,
      color: Color.red
    },
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    }
  ];

  constructor(){}

  ngOnInit(){}

  changeStatusText(){
    this.isUpper = !this.isUpper
  }

  changeOrder(value: string){
    this.orderBy = value;
  }
}
