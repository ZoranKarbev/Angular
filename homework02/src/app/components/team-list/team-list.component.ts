import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() teamsData: Team[];
  title: string = "Eastern Conference";
  conference: string = "East";
  
  constructor() { }

  ngOnInit(): void {
  }
  
  teamsToDisplay(): Team[] {
    return this.teamsData.filter(team => team.conference === this.conference);
  }
  toggleConference() {
    this.title = this.title === "Eastern Conference" ? "Western Conference" : "Eastern Conference";
    this.conference = this.conference === "East" ? "West" : "East";
  }
}