import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../helpers/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input() movieTitle: string;
  @Input() displayMovie: boolean;
  @Output() movieToParent: EventEmitter<Movie> = new EventEmitter<Movie>();
  
  movie: Movie = {
    id: 1,
    name: 'The Shawshank Redemption',
    genre: ['Drama', 'Mystery', 'Crime Fiction', 'Prison'],
    releaseDate: 1994,
    director: 'Frank Darabont',
    producer: 'Frank Darabont',
    description: 'The Shawshank Redemption is a 1994 American drama film, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton).',
    imageUrl: 'https://image.tmdb.org/t/p/original/pkDjn2aAg96XTL373w88hYEBZ3N.jpg',
    imageAlt: 'The Shawshank Redemption'
  }

  sendMovieToParent(): void {
    this.movieToParent.emit(this.movie);
  }

  ngOnInit(): void {
  }
}
