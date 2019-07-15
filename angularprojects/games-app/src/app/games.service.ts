import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Game } from "./models/game";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class GamesService {
  [x: string]: any;
  apiUrl: string = "https://games-api-siit.herokuapp.com/games";
  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  addGame(game: any): Observable<Game> {
    return this.http.post<any>(this.apiUrl, game, httpOptions);
  }

  deleteGame(game: Game): Observable<Game> {
    return this.http.delete<Game>(`${this.apiUrl}/${game._id}`);
  }
}
