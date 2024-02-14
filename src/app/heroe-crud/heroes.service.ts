import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interface/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiUrl}/heroes`);
  }

  getHeroeById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/heroes/${id}`);
  }
  
  deleteHeroById(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${this.apiUrl}/heroes/${id}`);
  }

  addNewHero(body: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.apiUrl}/heroes`, body);
  }

  updateHero(id: number, body: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.apiUrl}/heroes/${id}`, body);
  }


}
