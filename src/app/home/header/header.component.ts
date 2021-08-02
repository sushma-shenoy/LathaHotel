import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
name;
message;
phone;
email;
// eslint-disable-next-line max-len
directionLink='https://www.google.com/maps/dir//Hotel+Latha+Veg,+Fisheries+Road,+Kota,+Karnataka/@13.5250297,74.6695047,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbc96b409c72f15:0xe6974803a7ad2252!2m2!1d74.7045244!2d13.5249487';
  url: any;

  constructor() { }

  ngOnInit() {
    // this.sendMessage();
  }
   async getUrl(snap: firebase.default.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }

displayNone(id){
  document.getElementById(id).classList.toggle('displayNone');
}
gotoView(id){
  document.getElementById(id).scrollIntoView();
}
sendMail(){
  const message=this.name;
  return 'mailto:' +'sushmashenoy1997@gmail.com' +'?subject='+ 'Feedback' +'&body=' +message;

}
feedback(){}
}
