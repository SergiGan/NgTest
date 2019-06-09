import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	  @Input() product;
	  @Input() style;
	  @Output() item: EventEmitter<any> = new EventEmitter();
	  @Output() visibility: EventEmitter<any> = new EventEmitter(); // новий обєкт з аутпут
 	 // @Output() deleteUserId = new EventEmitter<number>();
  constructor() { }

  addToBasket() {
     this.item.emit(this.product);
   }

  ngOnInit() {
  }

  ngOnChanges(){
      
    }  
}
