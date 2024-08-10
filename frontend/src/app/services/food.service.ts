import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAGS_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    console.log('getAll');
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodBySearchTerm(searchTerm:string){
    console.log('getAllFoodBySearchTerm' + FOODS_BY_SEARCH_URL + searchTerm);
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    console.log('getAllTags');
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodByTag(tag: string): Observable<Food[]>{
    console.log('getAllFoodByTag');
    return tag === "All"?
      this.getAll():
      this.http.get<Food[]>(FOODS_BY_TAGS_URL + tag)
  }

  getFoodById(foodId:string):Observable<Food>{
    console.log('getFoodById');
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }
}
