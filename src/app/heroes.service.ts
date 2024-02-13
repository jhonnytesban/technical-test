import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './interface/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/heroes`);
  }
  
  deleteHeroById(id: number) {
    return this.http.delete<Hero[]>(`${this.apiUrl}/heroes/${id}`);
  }

  addNewHero(hero: Hero) {
    return this.http.post(`${this.apiUrl}/heroes`, hero);
  }
}
