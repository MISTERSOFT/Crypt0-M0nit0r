import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElectronService } from 'app/core/electron.service';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from 'app/shared/shared.module';

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
    ElectronService
  ]
})
export class CoreModule { }
