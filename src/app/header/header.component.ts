import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	style = 'visibility'; // значення змінної від changeStyle в властивість  style
  @Input() product;
  @Input() basketButton;
  @Output() visibility: EventEmitter<any> = new EventEmitter(); // новий обєкт з аутпут

  constructor() { }

  ngOnInit() {
  	console.log(this.basketButton);
  }
  changeStyle(event) {     // changeStyle через клік отримав аргумент: або ('list') або ('group') передав через метод emit 
                          //в змінну visibility яка присвоїла його властивості style
    this.visibility.emit(event);
    console.log(event);
  } 

}
