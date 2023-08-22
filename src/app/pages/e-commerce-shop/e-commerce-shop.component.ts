import { Component } from '@angular/core';

@Component({
  selector: 'app-e-commerce-shop',
  templateUrl: './e-commerce-shop.component.html',
  styleUrls: ['./e-commerce-shop.component.css']
})
export class ECommerceShopComponent {
  cardItems = [
    { title: 'Card 1', content: 'This is the content of Card 1.' },
    { title: 'Card 2', content: 'This is the content of Card 2.' },
    { title: 'Card 3', content: 'This is the content of Card 3.' },
    { title: 'Card 4', content: 'This is the content of Card 4.' },
    { title: 'Card 5', content: 'This is the content of Card 5.' },
    { title: 'Card 5', content: 'This is the content of Card 5.' }
  ];
}
