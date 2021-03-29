import { Component,OnInit, ElementRef,
   TemplateRef, ViewRef,
    ComponentRef, ViewChild,
    ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  AfterViewInit {
  title = 'Jumanji Stores';
  @ViewChild("loader", {read: ElementRef}) loader: ElementRef;
  @ViewChild("loading", {read: ElementRef}) loading: ElementRef;
  @ViewChild("gtd", {read: ElementRef}) gtd: ElementRef;
  @ViewChild("mockstart", {read: ElementRef}) mockstart: ElementRef;

  ngOnInit(){
    // return new LoadingEffect().attachEvents();

  }

  ngAfterViewInit(){
    // console.log(this.loader.nativeElement.textContent);
    // this.loader.nativeElement.classList.add("loading");

    this.gtd.nativeElement.style.display = 'none';
    // this.gtd.nativeElement.style.visibility = 'hidden';
    this.mockstart.nativeElement.style.display="block";
    this.loading.nativeElement.style.display = 'block';
    //
    //
    setTimeout(() => {
      this.gtd.nativeElement.style.display = 'block';
      this.gtd.nativeElement.style.visibility = 'visibile';

      this.mockstart.nativeElement.style.display="none";
      this.loader.nativeElement.style.display = 'none';
      this.loading.nativeElement.style.display = 'none';

      this.gtd.nativeElement.style.display = 'block';
      this.gtd.nativeElement.style.visibility = 'visibile';
    }, 5000);



  }
}



class LoadingEffect {
  constructor() {
    // this.verticalLoader = document.getElementsByClassName('loader');
    // this.gtd = document.getElementById('gtd');
    // this.loadingJacket = document.getElementsByClassName('loading');
    // //this.loadingJacket[0].classList.add("loading");
    // this.uiMockUp = document.getElementById("mock-up-start")
    // this.loaders;
    // this.gtd.style.display = 'none';
    // this.gtd.style.visibility = 'hidden';
    // this.uiMockUp.style.display="none";
  }

  attachEvents() {
    let that = this;

    setTimeout(() => {
      //this.uiMockUp.style.display="block";

    }, 2000);




    setTimeout(() => {
      // this.uiMockUp.style.display="none";
      // this.gtd.style.display = 'block';
      // this.gtd.style.visibility = 'visible';
      // this.loadingJacket[0].style.visibility = 'hidden';
      // this.loadingJacket[0].style.display = 'none';
      // this.verticalLoader[0].style.display = 'none';
    }, 5000);


  }


}
