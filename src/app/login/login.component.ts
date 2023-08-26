import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private meta: Meta, private tile: Title) { }

  ngOnInit(): void {
    this.tile.setTitle("Login")
    this.meta.addTag({name: "Login", content: "Página para inicar sesión en App"})
  }

}
