import { Component, OnInit } from '@angular/core';
import * as data from './dynamicData.json';
declare var $: any;
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
})
export class MainComponentComponent implements OnInit {
  products: any;
  showModalData: boolean = false;
  productInfo: any;
  showMore: boolean = false;
  showMoreButton: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.showData();
  }
  showData() {
    this.products = (data as any).default.items;
  }
  showModal(prod: any) {
    this.productInfo = prod;
    if (this.showMoreButton) {
      this.showModalData = true;
    }
  }

  showMoreFun(id: string) {
    $(`#${id}`).css('display', 'block');
    this.showMoreButton = true;
  }
  hideShowMoreFun(id: string) {
    $(`#${id}`).css('display', 'none');
    this.showMoreButton = false;
  }
  addItem(event: any) {
    this.showModalData = false;
  }
}
