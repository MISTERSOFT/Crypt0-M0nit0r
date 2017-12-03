import { NgModule } from '@angular/core';
import { ICOsRoutingModule } from 'app/icos/icos-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ICOsComponent } from 'app/icos/icos.component';

@NgModule({
  imports: [
    ICOsRoutingModule,
    SharedModule
  ],
  declarations: [ICOsComponent]
})
export class ICOsModule { }
