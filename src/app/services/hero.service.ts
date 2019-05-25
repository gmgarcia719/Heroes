import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HEROES } from '../shared/mock-heroes';
//this needs further investigation
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }

}
