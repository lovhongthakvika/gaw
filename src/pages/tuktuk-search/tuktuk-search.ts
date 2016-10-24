
import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { BookPage } from '../book/book';
import { NavController,Tabs,Nav } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-tuktuk-search',
  templateUrl: 'tuktuk-search.html'
})
export class TuktukSearch {
public tuktuks:any;
 public tab:Tabs;
 public items:any;
 public search:any;
 public help:any;
  constructor(public navCtrl: NavController, public http: Http,public nav: Nav,public alertCtrl: AlertController) {
   this.tab = this.navCtrl.parent;
    this.http.get('http://goanywhere.asia/tuktuk/query/valid/').map(res => res.json()).subscribe(data => {
        this.tuktuks=data['tuktuks'];
        this.help=this.tuktuks;
        this.items=[];
        for(var i=0;i<this.tuktuks.length;i++){
        	this.items[i]=(this.tuktuks[i].tuktuk_id);
        }
        console.log(this.items);

    });
	

  }
  goToTab2 (){  

    this.tab.select(1);
    
 	this.showConfirm();
  }
  goToTab3 (){
    this.tab.select(2);
  }
   showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you want to book this TukTuk?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          	this.goToTab3 ();
          }
        },
        {
          text: 'Book',
          handler: () => {
          	
          }
        }
      ]
    });
    confirm.present();
  }
   getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.search = this.items.filter((search) => {
      	// this.tuktuks=this.search;
      	this.help=[];
      	var ind=0;
      	for(var i=0;i<this.tuktuks.length;i++){
      		if(this.tuktuks[i].tuktuk_id.indexOf(val)!=-1){
        		this.help[ind]=(this.tuktuks[i]);
        		console.log(this.help);
        		ind++;
      		}
        }
        //return (val.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
    else
    {
    	this.help=this.tuktuks;
    }
  }
}
  

