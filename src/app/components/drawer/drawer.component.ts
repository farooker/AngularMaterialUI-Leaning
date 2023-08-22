import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  items: any[] = [];
  constructor(private router: Router) { }
  ngOnInit() {
    this.items = [
      { path: '/home',  title: 'Dashboard',  icon: 'dashboard'},
      { path: '/about', title: 'About',  icon:'location_city'},
      { path: '/user',  title: 'User', icon:'people'},
      { path: '/shop',  title: 'Shop', icon:'shopping_cart'}

    ];
  }
  isActive(path: string): boolean {
    return this.router.isActive(path, false);
  }
  handleLinkTo(path : string){
    this.router.navigateByUrl(path);
  }
}
