import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { scrollTo } from 'ng2-utils';

@Component({
  selector: 'app-onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.css']
})
export class OnepageComponent implements OnInit {

	id = 's1'; 
	// hid = 'h1'; wid='w1';

	constructor() { }

	ngOnInit() {
	}

	scrollTo(selector, parentSelector) {
		let horizontal = false;
		scrollTo(
			selector,       // scroll to this
			parentSelector, // scroll within (null if window scrolling)
			horizontal,     // is it horizontal scrolling
			0               // distance from top or left
		);
	}

	scrollEvent(){
		console.log('e');
	}

}
