import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'app/not-found/not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
