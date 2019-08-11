import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule} from 'ngx-ui-switch';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeterComponent } from './meter/meter.component';
import {MeterService} from './service/meter.service';
import { AuthComponent } from './auth/auth.component';
import { MeterViewComponent } from './meter-view/meter-view.component';
import {AuthService} from './service/auth.service';
import { SingleMeterComponent } from './sigle-meter/single-meter.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import {AuthGuard} from './service/auth-guard.service';
import { AddMeterComponent } from './add-meter/add-meter.component';
import { UsersComponent } from './users/users.component';
import {UserService} from './service/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

const appRoutes: Routes = [
  { path : 'meters', component: MeterViewComponent, canActivate: [AuthGuard]},
  { path : 'meters/:id', component: SingleMeterComponent,  canActivate: [AuthGuard]},
  {path : 'add', component: AddMeterComponent, canActivate: [AuthGuard]},
  { path : 'auth', component: AuthComponent},
  { path : 'users', component: UsersComponent},
  { path : 'new-user', component: NewUserComponent},
  { path : '', component: AuthComponent},
  { path : 'not-found', component: FourOFourComponent},
  { path : '**', redirectTo: '/not-found'}

];
@NgModule({
  declarations: [
    AppComponent,
    MeterComponent,
    AuthComponent,
    MeterViewComponent,
    SingleMeterComponent,
    FourOFourComponent,
    AddMeterComponent,
    UsersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule.forRoot(
      {
        defaultBgColor : 'red',
        size: 'small'
      }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MeterService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
