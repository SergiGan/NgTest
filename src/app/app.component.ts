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
    image: 'https://www.pexels.com/uk-ua/search/technic/',
    name: 'technics' ,
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '400$'
  }, {
    id:2,
    image: 'https://unsplash.com/t/food-drink/',
    name: 'food',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '450$'
  }, {
    id:3,
    image: 'https://www.pexels.com/uk-ua/collections/cars-dvgfira/',
    name: 'transport',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '500$'
  }, 
    {
      id:4,
    image: 'https://www.pexels.com/uk-ua/search/fassion/',
    name: 'fashion',
    describe: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    price: '550$'
  },
    {
      id:5,
    image: 'https://www.pexels.com/uk-ua/search/animals/',
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
