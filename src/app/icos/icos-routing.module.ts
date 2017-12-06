import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ICOsComponent } from 'app/icos/icos.component';

const routes: Routes = [
  { path: '', component: ICOsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ICOsRoutingModule { }
