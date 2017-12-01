import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'app/shared';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: IMenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems.push(
      {
        icon: 'home',
        text: 'Dashboard',
        link: '/dashboard',
        isActive: true
      },
      {
        icon: 'magnify',
        text: 'ICOs',
        link: '/bitedechamo',
        isActive: false
      }
    )
  }

}
