import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ComponentsModule } from '../components/components.module';
import { PersonaPageModule } from './../pages/persona/persona.module';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPage } from '../pages/tabs/tabs';
import { KeysProvider } from '../providers/keys/keys';
import { PersonaProvider } from '../providers/persona/persona';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    HomePageModule,
    PersonaPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KeysProvider,
    PersonaProvider
  ]
})
export class AppModule {}
