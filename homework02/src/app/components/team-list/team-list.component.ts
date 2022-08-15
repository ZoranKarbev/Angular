import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() teamsData: Team[];
  @Input() areTeamsFetched: boolean;
  title: string = "Eastern Conference";
  conference: string = "East";
  teamNameFromChidren: string;
  playersList: Player[]; 
  arePlayersFetched: boolean = false;
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
  onTeamReceieved(teamName: string): void {
    this.teamNameFromChidren = teamName;
    console.log(this.teamNameFromChidren);
    this.fetchPlayers()
  }
  
  fetchPlayers(): void {
    if (this.teamNameFromChidren) {
      console.log("Team", this.teamNameFromChidren);
      fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
      .then(response => response.json())
      .then(data => {
      this.playersList = data.data
        .filter((player: Player) => player.team.abbreviation === this.teamNameFromChidren);
      console.log("PlayerList", this.playersList);
      this.arePlayersFetched = true;
      })
    .catch(error => console.log(error));
    }
  } 
}