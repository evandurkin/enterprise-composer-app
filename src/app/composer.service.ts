// Title: Assignment 4.4
// Author: Evan Durkin
// Date: January 29, 2022

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Frédéric Chopin", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Ludwig Van Beethoven", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Ryuichi Sakamoto", genre: "Electronic"
      },
      {
        composerId: 103, fullName: "Stephen Sondheim", genre: "Vocal"
      },
      {
        composerId: 104, fullName: "Thelonious Monk", genre: "Jazz"
      }
    ]
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer =>
      composer.fullName.toLowerCase().indexOf(name)>-1)));
  }
}
