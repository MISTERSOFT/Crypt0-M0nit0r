//#region Angular Modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//#endregion

//#region Angular Materialize Modules
import { MaterializeModule } from 'ng2-materialize';
//#endregion

@NgModule({
  imports: [
    // Angular Modules
    HttpModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    MaterializeModule
  ],
  declarations: []
})
export class SharedModule { }
