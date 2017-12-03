import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'app/shared';
import { LoaderService } from 'app/core/loader.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: IMenuItem[] = [];
  showLoader: Subject<boolean>;

  constructor(private _loader: LoaderService) { }

  ngOnInit() {
    this.menuItems.push(
      { icon: 'view-dashboard', text: 'Dashboard', link: '/dashboard' },
      { icon: 'magnify', text: 'ICOs', link: '/icos' }
    );

    this.showLoader = this._loader.isQuerying;
  }

}
