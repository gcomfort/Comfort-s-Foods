import { FoodService } from './../services/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];
  tags?:Tag[];
  constructor(private FoodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.FoodService.getAllTags();
  }

}
function input() {
  throw new Error('Function not implemented.');
}

