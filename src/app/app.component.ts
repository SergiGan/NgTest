import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  groupItemsStyle ='group'; 
  product = 'product';
  basket = [];
 
  PushUpTo(event){
      this.basket.push(event);
    }

  takeItStyle(event){ 
    this.groupItemsStyle = event;
      console.log(event);
    }

products = [{
    id:1,
    image: 'https://placeimg.com/640/480/tech', //'https://www.pexels.com/uk-ua/search/technic/'
    name: 'technics' ,
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '400$'
  }, {
    id:2,
    image: 'https://baconmockup.com/300/200',
    name: 'food',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '450$'
  }, {
    id:3,
    image: 'https://www.pexels.com/uk-ua/collections/cars-dvgfira',
    name: 'transport',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '500$'
  }, 
    {
      id:4,
    image: 'https://placeimg.com/640/480/girls', // https://www.pexels.com/uk-ua/search/fassion/ https://placeimg.com/640/480/arch
    name: 'beautiful moments',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: 'not for sale'
  },
    {
      id:5,
    image: 'https://loremflickr.com/640/360/', //https://placeimg.com/640/480/animals
    name: 'animals',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '600$'
  },
  {
      id:6,
    image: 'https://www.pexels.com/uk-ua/search/sports/',
    name: 'sports',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '700$',
    doIt: 'for take a part'
  }
    ];

 onCheck() {
                   
  }
}
