import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
 

@Component({
  selector: 'app-onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.css']
})
export class OnepageComponent implements OnInit {

     @ViewChild('container')
     private container: ElementRef;

	constructor(
		private pageScrollService: PageScrollService, 
		@Inject(DOCUMENT) private document: any
		) { }

	ngOnInit() { }

	public goToHome(): void {
		let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(
			this.document, '#home'
		);
		this.pageScrollService.start(pageScrollInstance);
	};

	public goTo(destination): void {
		let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(
			this.document, destination
		);
		this.pageScrollService.start(pageScrollInstance);
	};    

	public scrollSomewhereHorizontally(): void {
		let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
			document: this.document, 
			scrollTarget: '#targetToTheRight', 
			verticalScrolling: false
		});
		this.pageScrollService.start(pageScrollInstance);
	}; 

	public goToHeadingInContainer(): void {
		let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
			document: this.document, 
			scrollTarget: '.headingClass', 
			scrollingViews: [this.container.nativeElement]
		});
		this.pageScrollService.start(pageScrollInstance);
	};
	
	public  myFunction(): void {
    var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
   	 }
	};
}
