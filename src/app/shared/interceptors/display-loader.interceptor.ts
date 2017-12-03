import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { LoaderService } from 'app/core/loader.service';

@Injectable()
export class DisplayLoaderInterceptor implements HttpInterceptor {

  constructor(private _loader: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        // When the request has been sent to the API, we show the loader
        if (event.type === HttpEventType.Sent) {
          this._loader.showLoader();
        }
        // When we got a response from the API, we hide the loader
        if (event.type === HttpEventType.Response) {
          this._loader.hideLoader();
        }
      })
    );
  }
}
