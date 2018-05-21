import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { VideoPlayer } from '@ionic-native/video-player';
import { MyApp } from './app.component';
import { Video1Page } from '../pages/video1/video1';


@NgModule({
  declarations: [
    MyApp,
    Video1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Video1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
