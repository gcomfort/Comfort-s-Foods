import { Injectable } from '@angular/core';
import { Food } from '../../models/food';
import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) :Food{
    return this.getAll().find(food => food.id == id)!;

  }


  getAllFoodsBySearchTerm(searchTerm:string) :Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      { name: 'All', count: 10 },
      { name: 'fastfood', count: 4 },
      { name: 'Noodles', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'Pan cakes', count: 1 },
      { name: 'grilled chicken', count: 1 },
      { name: 'Fried chicken', count: 1 },
      { name: 'breakfast', count: 1 }
    ];

  }

  getAllFoodByTag(tag: string): Food[] {
    return tag === "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
      {
        id:1,
        name:'grilled chicken',
        price: 10,
        cookTime:'15-25',
        favorite: true,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg/',
        tags: ['fastfood', 'grilled chicken'],
      },
      {
        id:2,
        name:'Hamburger',
        price: 15,
        cookTime:'15-20',
        favorite: true,
        origins: ['germany'],
        stars: 3.5,
        imageUrl: '/assets/images/food-2.jpg/',
        tags: ['breakfast', 'Hamburger'],
      },
      {
        id:3,
        name:'Noodles',
        price: 7,
        cookTime:'7-10',
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-3.jpg/',
        tags: ['fastfood', 'Noodles'],
      },
      {
        id:4,
        name:'Pan Cakes',
        price: 9,
        cookTime:'5-8',
        favorite: false,
        origins: ['England'],
        stars: 3.5,
        imageUrl: '/assets/images/food-4.jpg/',
        tags: ['fastfood', 'Pan cakes'],
      },
      {
        id:5,
        name:'Fried chicken',
        price: 12,
        cookTime:'15-25',
        favorite: true,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/food-5.jpg/',
        tags: ['fastfood', 'Fried chicken'],
      },

    ]
  }
}
