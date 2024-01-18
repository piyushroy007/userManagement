import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerlistingComponent } from './components/customerlisting/customerlisting.component';
import { AssociatelistingComponent } from './components/associatelisting/associatelisting.component';
import { MaterialModule } from './Material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserReducer } from './store/User/User.Reducer';
import { UserEffect } from './store/User/User.effects';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './store/common/App.Effects';
import { MenubarComponent } from './components/menubar/menubar.component';
import { UserlistComponent } from './components/userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CustomerlistingComponent,
    AssociatelistingComponent,
    MenubarComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({user:UserReducer}),
    EffectsModule.forRoot([AppEffects,UserEffect]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
