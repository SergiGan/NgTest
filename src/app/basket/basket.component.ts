import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
	message; message1: string ; //message: string = new Date().toDateString();message: string = new Date().toTimeString();
	@Input() product;
  
  constructor() {
  		setInterval(()=>{
  		this.message = new Date().toTimeString();// оновлення дати кожну секунду
  	}, 1000)
  	this.message1 = new Date().toDateString();// this.message = "world"; 
   
   }

  ngOnInit() {
  }

}