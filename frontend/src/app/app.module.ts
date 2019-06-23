import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/claimer/home/home.component';
import { SelectComponent } from './pages/claimer/select/select.component';
import { CreateClaimComponent } from './pages/claimer/create-claim/create-claim.component';
import { AttendentHomeComponent } from './pages/attendant/attendent-home/attendent-home.component';
import { AttendantVerifyComponent } from './pages/attendant/attendant-verify/attendant-verify.component';
import { AttendantSuccessComponent } from './pages/attendant/attendant-success/attendant-success.component';
import { ShareComponent } from './pages/claimer/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectComponent,
    CreateClaimComponent,
    AttendentHomeComponent,
    AttendantVerifyComponent,
    AttendantSuccessComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
