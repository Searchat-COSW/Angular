import{Component, OnInit}from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var sizeW=screen.width*.5;
    var sizeH=screen.height*.78;
    document.getElementById('image1').style.width=sizeW+"px";
    document.getElementById('image1').style.height=sizeH+"px";
    document.getElementById('image2').style.width=sizeW+"px";
    document.getElementById('image2').style.height=sizeH+"px";
  }

}
