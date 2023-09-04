import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fruitList: any = [];

  constructor(private readonly homeService: HomeService, private meta: Meta, private tile: Title) { }

  ngOnInit(): void {
    this.meta.addTag({ name: "title", content: "First Class Restore" });
    this.tile.setTitle("First Class Restore")
    this.fruitList = this.homeService.findAll()
  }
}

