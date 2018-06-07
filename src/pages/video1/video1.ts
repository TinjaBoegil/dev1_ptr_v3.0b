<<<<<<< master
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Video1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video1',
  templateUrl: 'video1.html',
})
export class Video1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Video1Page');
  }

}
=======
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer,VideoOptions  } from '@ionic-native/video-player';

/**
 * Generated class for the Video1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video1',
  templateUrl: 'video1.html',
})
export class Video1Page {
videoOpts : VideoOptions ;
  constructor(public navCtrl: NavController, public navParams: NavParams,private videoPlayer : VideoPlayer) {
  }

  public playVideo(){
    this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });    
}
public stopPlayingVideo(){
    this.videoPlayer.close();
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad Video1Page');
  }

}
>>>>>>> master
