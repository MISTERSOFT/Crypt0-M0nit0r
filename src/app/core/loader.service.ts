import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {
  isQuerying: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  showLoader() {
    this.isQuerying.next(true);
  }

  hideLoader() {
    this.isQuerying.next(false);
  }

}
