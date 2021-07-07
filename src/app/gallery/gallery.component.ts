import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
   foodItem=[
    {name:'Idly',src:'../../../assets/food/idlyTove.jpg'},
    {name:'Avalakki',src:'../../../assets/food/avalakki.jpg'},
    {name:'Buns',src:'../../../assets/food/buns.jpg'},
    {name:'Chattambade',src:'../../../assets/food/chattambade.jpg'},
    {name:'Coffee',src:'../../../assets/food/coffee.jpg'},



  ];
  constructor() { }

  ngOnInit() {
    document.getElementById('defaultOpen').click();
  }
   openPage(pageName,elmnt,color) {
    let i;
    const tabcontent = Array.from(document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    const tablinks = Array.from(document.getElementsByClassName('tablink') as HTMLCollectionOf<HTMLElement>);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }
    document.getElementById(pageName).style.display = 'flex';
    elmnt.target.style.backgroundColor = color;
  }



}
