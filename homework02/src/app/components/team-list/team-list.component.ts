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
  playerIdfromChildren: number;
  playersList: Player[]; 
  arePlayersFetched: boolean = false;
  displayLoader: boolean = false;
  displayLoader2: boolean = false;
  stats: any;
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
    this.displayLoader = true;
    this.teamNameFromChidren = teamName;
    console.log(this.teamNameFromChidren);
    this.fetchPlayers()
  }
  
  fetchPlayers(): void {
    this.playersList = [];
    this.stats = null;
    if (this.teamNameFromChidren) {
      console.log("Team", this.teamNameFromChidren);
      fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
      .then(response => response.json())
      .then(data => {
      this.playersList = data.data
        .filter((player: Player) => player.team.abbreviation === this.teamNameFromChidren);
      console.log("PlayerList", this.playersList);
      this.arePlayersFetched = true;
      this.displayLoader = false;
      })
    .catch(error => console.log(error));
    }
  } 
  onPlayerIdReceived(playerId: number): void {
    this.displayLoader2 = true;
    this.playerIdfromChildren = playerId;
    console.log("PlayerId", this.playerIdfromChildren);
    this.fetchStats(playerId);     
  }
  fetchStats(playerId: number): void {
    this.stats = null;
    fetch( `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}`)
    .then(response => response.json())
    .then(data => {
      console.log("Data", data);
      const randNumber = Math.floor(Math.random() * data.data.length);
      console.log("RandomNumber", randNumber);
      this.stats = data.data[randNumber];
      console.log("Stats", this.stats);
      this.displayLoader2 = false;

    })
    .catch(error => console.log(error));
  }
}