import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  num:number = 0;

  aumentar(){
    this.num++;
  }
  disminuir(){
    this.num--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
