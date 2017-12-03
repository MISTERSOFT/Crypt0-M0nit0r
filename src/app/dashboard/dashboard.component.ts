import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/core/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoading = false;

  constructor(private _loader: LoaderService) { }

  ngOnInit() {
  }

  onClick() {
    this.isLoading = !this.isLoading;
    this._loader.isQuerying.next(this.isLoading);
  }

}
