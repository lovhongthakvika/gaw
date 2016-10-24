import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Option',
      message: 'Select Your Option',
      buttons: [
        {
          text: 'Book Later',
          handler: () => {
          	//this.goToTab3 ();
          }
        },
        {
          text: 'Book Now',
          handler: () => {
          	
          }
        }
      ]
    });
    confirm.present();
  }
}
