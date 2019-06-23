import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/claimer/home/home.component';
import {SelectComponent} from './pages/claimer/select/select.component';
import {CreateClaimComponent} from './pages/claimer/create-claim/create-claim.component';
import {ShareComponent} from './pages/claimer/share/share.component';
import {AttendentHomeComponent} from './pages/attendant/attendent-home/attendent-home.component';
import {AttendantVerifyComponent} from './pages/attendant/attendant-verify/attendant-verify.component';
import {AttendantSuccessComponent} from './pages/attendant/attendant-success/attendant-success.component';

const routes: Routes = [
  {
    path: 'claimer/home',
    component: HomeComponent
  },
  {
    path: 'claimer/select',
    component: SelectComponent
  },
  {
    path: 'claimer/createclaim',
    component: CreateClaimComponent
  },
  {
    path: 'claimer/share',
    component: ShareComponent
  },
  {
    path: 'attendant/home',
    component: AttendentHomeComponent
  },
  {
    path: 'attendant/verify',
    component: AttendantVerifyComponent
  },
  {
    path: 'attendant/success',
    component: AttendantSuccessComponent
  },
  { path: '**', redirectTo: '/claimer/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
