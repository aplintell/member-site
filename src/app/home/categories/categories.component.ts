import { Component, OnInit } from '@angular/core';
import { Category } from '../../../entity/category';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
Category
  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      data=>{
        this.categories = data.json().map(
          (category: Category) => new Category().deserialize(category));
        console.log(this.categories);
      });
  }

}
