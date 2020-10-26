import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';

import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  panelOpenState = [];
  panelOpenStateProducts = [];

  CatData ={}


  constructor(public Cat:CategoriesService) { }


  // this is called when the component is initialized
  ngOnInit(): void {
    this.getData()
  }


  //this function is to retrive the data from the API
  public getData()
  {

    //calls the category service that makes the http request
     this.Cat.getCategories().subscribe(Categories =>{
      this.CatData = Categories


      //This creates the array of booleans used to determine if the product expansion panel is open
      for (var x in this.CatData[0].products){
        this.panelOpenStateProducts.push(false)

      }

      //This creates the array of booleans used to determine if the Category expansion panel is open
      for (var c in this.CatData){
        this.panelOpenState.push(false)

      }

    });

  }



}
