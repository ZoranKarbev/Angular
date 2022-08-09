import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/helpers/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieFromChild: Movie;
  displayMovie: boolean = false;

  constructor() { }

  @Input() movieListTitle: string;
  @Input() movieTitle: string;
  
  showMovie(): void {
    console.log(this.movieTitle);
  }

  onMovieRecieved(value: Movie): void {
  this.movieFromChild = value;
  this.displayMovie = !this.displayMovie;
  }

  ngOnInit(): void {
  }
}
