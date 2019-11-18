import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Course Detail';
  product: IProduct;

  constructor( private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.product = {
      'productId': id,
      'productName': 'graphic design',
      'productCode': 'ek-002',
      'startingDate': 'december, 2019',
      'description': 'skill set in corelDraw, Adobe Photoshop, InDesign, Illustrator',
      'price': 20000,
      'starRating': 4.1,
      'imageUrl': 'assets/images/graphic.jpg'

    }
  }
  onBack(): void{
    this.router.navigate['/products'];
  } 

}
