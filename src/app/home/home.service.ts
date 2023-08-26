import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  findAll(): any {
    return [
      {
        id: "1",
        name: "Mango"
      },
      {
        id: "1",
        name: "Manzana"
      },
      {
        id: "1",
        name: "Banana"
      }
    ]

  }
}
