//#region Angular Modules
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//#endregion

//#region My Modules
import { SharedModule } from 'app/shared/shared.module';
//#endregion

//#region Core Module Services
import { ElectronService } from 'app/core/electron/electron.service';
import { LoaderService } from 'app/core/loader.service';
//#endregion

//#region Core Module Components
import { MenuComponent } from 'app/core/menu/menu.component';
//#endregion

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [MenuComponent],
  providers: [
    ElectronService,
    LoaderService
  ]
})
export class CoreModule { }
