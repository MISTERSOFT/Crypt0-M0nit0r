import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ICOService } from 'app/shared/icos.service';
import { ICO } from 'app/shared';

@Component({
  selector: 'app-icos',
  templateUrl: './icos.component.html',
  styleUrls: ['./icos.component.scss']
})
export class ICOsComponent implements OnInit {

  finishedICOs: ICO[] = [];
  liveICOs: ICO[] = [];
  upcomingICOs: ICO[] = [];
  selectedTab = 'finished';
  onSearch: Subject<string> = new Subject<string>();

  constructor(private _icos: ICOService) { }

  ngOnInit() {
    this.loadFinishedICOs();
    // Init search bar
    this.onSearch
      .debounceTime(500)
      .pipe(distinctUntilChanged())
      .subscribe((search) => {
        // If the search bar is empty
        if (search === '') {
          switch (this.selectedTab) {
            case 'finished': this.loadFinishedICOs(); break;
            case 'live': this.loadLiveICOs(); break;
            case 'upcoming': this.loadUpcomingICOs(); break;
            default: break;
          }
        } else {
          // Filter data
          // TODO: Filter data with search bar
          console.log('selected tab', this.selectedTab, search);
          search = search.toLowerCase();
          switch (this.selectedTab) {
            case 'finished':
              this.loadFinishedICOs();
              this.finishedICOs = this.finishedICOs.filter(ico => ico.name.toLowerCase().indexOf(search) !== -1);
              break;
            case 'live':
              this.loadLiveICOs();
              this.liveICOs = this.liveICOs.filter(ico => ico.name.toLowerCase().indexOf(search) !== -1);
              break;
            case 'upcoming':
              this.loadUpcomingICOs();
              this.upcomingICOs = this.upcomingICOs.filter(ico => ico.name.toLowerCase().indexOf(search) !== -1);
              break;
            default: break;
          }
        }
      });
  }

  private loadFinishedICOs() {
    this._icos
      .getAllFinished()
      .pipe(
        filter(ico => {
          // console.log('filter', ico);
          return true;
        })
      )
      .subscribe(data => this.finishedICOs = data);
  }

  private loadLiveICOs() {
    this._icos.getAllLive().subscribe(data => { this.finishedICOs = data; console.log(data) });
  }

  private loadUpcomingICOs() {
    this._icos.getAllUpcoming().subscribe(data => { this.finishedICOs = data; console.log(data) });
  }

  private loadDataDependingTab() {
    switch (this.selectedTab) {
      case 'finished': this.loadFinishedICOs(); break;
      case 'live': this.loadLiveICOs(); break;
      case 'upcoming': this.loadUpcomingICOs(); break;
      default: break;
    }
  }

  onTabSelected = (activeTab) => {
    this.selectedTab = activeTab[0].id;
    this.loadDataDependingTab();
  }

  // onSearch(value) {
  //   console.log('onSearch', value);
  // }

}
