import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs/Observable';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-vins',
  templateUrl: './vins.component.html',
  styleUrls: ['./vins.component.css']
})
export class VinsComponent implements OnInit {

  listProduct: any = [];
  loading: boolean;
  currentProduct: object;
  deleted: boolean;
  updated: boolean;
  paginate_show:boolean = false;
  paginate:Array<number>;
  page_current:number = 0;
  p_prev:number;
  p_next:number;
  max_page:number = 2;
  limits:number = 5;

  constructor(private http: Http, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.pagination(1);
  }

  /**
   * Pagination request
   *
   * @param page offset from where to show
   *
   * @return void
  */
  pagination(page_param:number, limits:number = 0) {
    let is_paginate_allowed:boolean = true;

    if (page_param == this.page_current && limits == 0)
      is_paginate_allowed = false;

    if(limits == 0)
      limits = this.limits;
    else
      this.limits = limits;

    // check if paginate is allowed
    if (page_param == 0)
      is_paginate_allowed = false;

    if(is_paginate_allowed) {
      this.loading = true;
      this.http.get(urlApi + '/vins/1/' + page_param + "/" + limits)
      .map(
        (response) => response.json()
      )
      .subscribe(
        (data) => {
          this.listProduct = data.contain;
          this.loading = false;
          this.p_prev = data.p_prev;
          this.p_next = data.p_next;
          this.page_current = data.p_current;

          this.paginate_show = (data.count > this.limits);

          let page = [];
          let max = Math.ceil(data.count / limits);
          for (var i = 1; i <= max; ++i) {
            page.push(i);
          }

          this.max_page = page.length;
          this.paginate = page;

          if(page_param == 1)
            this.p_prev = 0;
          if(this.p_next > this.max_page)
            this.p_next = 0;
        }
      )    
    }
  }

  setCurrentProduct(product): void{
    this.currentProduct = product;
  }

  deleteProduct(product): void{
    this.loading = true;
    this.http.get(urlApi + '/vins/delete/' + product.id).subscribe((response) => {
      this.ngOnInit();
      this.ngxSmartModalService.closeLatestModal();
      this.loading = false;
      this.deleted = true;
      this.updated = false;
    }, (error) => {
      console.log(error);
    });
  }

  updateProduct(product): void{
    this.loading = true;
    console.log(product);
    this.http.post(urlApi + '/vins/update/' + product.id, product).subscribe((response) => {
      this.ngOnInit();
      this.ngxSmartModalService.closeLatestModal();
      this.loading = false;
      this.updated = true;
      this.deleted = false;
    }, (error) => {
      console.log(error);
    });
  }
}
