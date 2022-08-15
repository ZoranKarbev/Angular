import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  @Output() teamToParent: EventEmitter<string> = new EventEmitter<string>();
  private eastColor: string = '#1d428a'
  private westColor: string = '#c8102e'
  
  constructor() { }

  ngOnInit(): void {
  }

  bgColor(team: Team): string {
    return team.conference === "East" ? this.eastColor : this.westColor;
  }
  sendTeamToParent(): void {
    this.teamToParent.emit(this.team.abbreviation);
  }
}