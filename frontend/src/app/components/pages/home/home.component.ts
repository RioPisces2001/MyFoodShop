import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        console.log('Home getAllFoodBySearchTerm');
        foodsObservable = this.foodService.getAllFoodBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        foodsObservable = this.foodService.getAllFoodByTag(params.tag);
        console.log('Home getAllFoodByTag');
      } else foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serverFood) => {
        this.foods = serverFood;
      });
    });
  }

  ngOnInit(): void {}
}
