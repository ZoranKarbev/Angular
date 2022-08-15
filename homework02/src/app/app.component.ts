import { Component, OnInit } from '@angular/core';
import { Team } from './interfaces/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Basketball App';
  areTeamsFetched: boolean = false;
  teamsData: Team[];
  constructor() { }

  ngOnInit(): void {
    fetch('https://www.balldontlie.io/api/v1/teams')
    .then(response => response.json())
    .then(data => {
      this.teamsData = data.data;
      console.log(this.teamsData);
      console.log(this.teamsData[0]);
      this.areTeamsFetched = true;
    })
    .catch(error => console.log(error));
  }
}
