import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

	desserts;
	insertOrList;
	deleted;
	idDessertTodelete;
	dessertsCharger = false;
	dessertToModifier = false;

	headers: Headers;
    options: RequestOptions;	

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router,
		public ngxSmartModalService: NgxSmartModalService
	) { }

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;		

		let url = urlApi + '/dessert';

		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					console.log(data);
					this.desserts = data;
					this.dessertsCharger = (data.length > 0) ? true : false;
				}
			)  	
	}

	supprimerDessert(desser) {
		this.idDessertTodelete = desser.id;
	}	

	modifierDessert(dessert) {
		this.dessertToModifier = dessert;
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: cpHeaders });

		let body = JSON.stringify(data);
		let url = urlApi + '/dessert/' + data.id;
		console.log(this.headers);
		return this.http.put(
			url,
			data,
			options
		).map(success => {
			success.status;
			console.log('resss');
		})
		.catch(this.handleError);
		

	}

    private extractData(res: Response) {
    	console.log('extractData');
        let body = res.json();
    	console.log(body);
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }    

	validationFomulaire(data) {
		let message = '';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.prix === '' ) message = 'Le champ prix ne doit pas être vide';

		if ( message != '' ) return message;

		return false; 
	}

}
