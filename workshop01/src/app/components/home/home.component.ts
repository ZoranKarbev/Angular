import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const url = "https://swapi.dev/api/planets/133/"
    console.log(url.split("/").slice(-2)[0])

  }

}
