import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CurrentLocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-current-location',
  templateUrl: 'current-location.html'
})
export class CurrentLocation {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CurrentLocation Page');
  }

}
