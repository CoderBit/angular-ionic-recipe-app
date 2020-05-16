import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private placesArray: Place[] = [
    new Place(
      'p1',
      'Mount Bromo',
      'Indonesia',
      'https://images.unsplash.com/photo-1570174032521-a18ac4975c72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p2',
      'Red Square',
      'Russia',
      'https://images.unsplash.com/photo-1536609143569-6d0fb61c6f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    ),
    new Place(
      'p3',
      'Metropolitan City of Venice',
      'Italy',
      'https://images.unsplash.com/photo-1538597321763-e2dabb6c9505?ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31')
    )
  ];
  constructor() {}

  get places() {
    return [...this.placesArray];
  }

  getPLace(id: string) {
    return {...this.places.find(p => p.id === id)};
  }
}
