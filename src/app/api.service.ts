import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
headers={
  'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
};
  constructor(private _httpClient:HttpClient) { 
  }
  getAllGames():Observable<any>{
    return this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers:this.headers
    })
  }
  getPlatform(type:string):Observable<any>{
    return this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers:this.headers,
      params:{platform:type}

    })
  }
  getsort(sort:string):Observable<any>{
    return this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers:this.headers,
      params:{'sort-by':sort}

    })
  }
  getCat(cat:string):Observable<any>{
    return this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
      headers:this.headers,
      params:{category:cat}

    })
  }
  getDetails(id:string):Observable<any>{
    return this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/game',{
      headers:this.headers,
      params:{id:id}

    })
  }

}
