import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() stats:any;
  @Input() displayStatsError: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  threePointPercentage(): string {
    return this.stats.fg_pct ? `${"with " + (this.stats.fg_pct * 100).toFixed(1) + "% field goals."}` : "and didn't made any field goal.";
  }
}
