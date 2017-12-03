//#region Angular Modules
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//#endregion

//#region Angular Materialize Modules
import { MaterializeModule } from 'ng2-materialize';
//#endregion

//#region My Interceptors
import { DateCountdownComponent } from 'app/shared/components/date-countdown/date-countdown.component';
//#endregion

//#region My Services
import { ICOService } from 'app/shared/icos.service';
//#endregion

//#region My Components
import { DisplayLoaderInterceptor } from 'app/shared/interceptors/display-loader.interceptor';
//#endregion

@NgModule({
  imports: [
    // Angular Modules
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    MaterializeModule,
    DateCountdownComponent
  ],
  declarations: [
    DateCountdownComponent
  ],
  providers: [
    //#region Interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DisplayLoaderInterceptor,
      multi: true
    },
    //#endregion
    ICOService
  ]
})
export class SharedModule { }
