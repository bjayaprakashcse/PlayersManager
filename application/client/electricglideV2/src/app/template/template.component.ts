import { Component, OnInit, Inject } from '@angular/core';
import { TemplateService } from './template.service';

var Slider: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})

export class TemplateComponent implements OnInit {

  public maxPrice: any;
  public minPrice: string = '999';
  public lowpriceData: any = [];
  public priceRangeModel: any = [];
  public bestSellerArray: any = [];

    constructor (
      private templateService: TemplateService
    ) { }

    ngOnInit() {
      this.findByBestSeller();
    }

    findByPriceRangeModelList() {

    }

    change() {
      let objectData = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice
      }
      console.log('minPrice and maxPrice', this.minPrice, 'max', this.maxPrice);
      this.templateService.GpSearch(objectData).subscribe((data: any) => {
        this.priceRangeModel = data;
        console.log('data ====>>>', data);
        console.log(data);
      })
    }

    lowpricetype(typename:any) {
      let objectData = {
        lowprice: '1',
        type: typename
      }
      this.templateService.GpSearch(objectData).subscribe((data: any) => {
        this.lowpriceData = data;
        console.log(data);
      })
    }

    findByBestSeller() {
      let objectData = {
        best_seller: true
      }
      this.templateService.GpSearch(objectData).subscribe((data:any) => {
        this.bestSellerArray = data;
        console.log(data);
      })
    }

    findByplayersType() {
      let objectData = {
        type: true
      }
      this.templateService.GpSearch(objectData).subscribe((data: any) => {
        console.log(data);
      })
    }
}
