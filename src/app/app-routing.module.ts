import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: '**', loadChildren: 'app/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
