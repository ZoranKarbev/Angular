import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Output() playerToParent: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {
  }

  sendPlayerIdToParent(): void {
    this.playerToParent.emit(this.player.id);
  }
}
