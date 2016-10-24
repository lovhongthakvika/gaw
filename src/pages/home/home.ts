
import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
 
  }
}