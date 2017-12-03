import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ICO, ICOType } from 'app/shared';

@Injectable()
export class ICOService {

  private readonly api = 'https://api.icowatchlist.com/public/v1/';
  private readonly apis = {
    icoWatchList: {
      finished: 'https://api.icowatchlist.com/public/v1/finished',
      live: 'https://api.icowatchlist.com/public/v1/live',
      upcoming: 'https://api.icowatchlist.com/public/v1/upcoming'
    }
  };

  constructor(private httpClient: HttpClient) { }

  private mapICODatas(response): ICO[] {
    const data = [];
    for (const key in response['ico']) {
      if (response['ico'].hasOwnProperty(key)) {
        response['ico'][key].forEach(ico => {
          let type: ICOType;
          switch (key) {
            case 'finished': type = ICOType.FINISHED; break;
            case 'live': type = ICOType.LIVE; break;
            case 'upcoming': type = ICOType.UPCOMING; break;
            default: break;
          }
          data.push(new ICO(ico, type))
        });
      }
    }
    return data;
  }

  getAll() {
    return this.httpClient.get(this.api).map(this.mapICODatas);
  }

  getAllFinished() {
    return this.httpClient.get(this.apis.icoWatchList.finished).map(this.mapICODatas);
  }

  getAllLive() {
    return this.httpClient.get(this.apis.icoWatchList.live).map(this.mapICODatas);
  }

  getAllUpcoming() {
    return this.httpClient.get(this.apis.icoWatchList.upcoming).map(this.mapICODatas);
  }

}
