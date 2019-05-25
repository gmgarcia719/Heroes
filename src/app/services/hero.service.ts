import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HEROES } from '../shared/mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES.slice();
  }
}
