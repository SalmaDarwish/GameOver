import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Game } from '../game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  count:number=1;
  gamesData:Game[]=[]
  constructor(private _api:ApiService ) { }
  getAll(){
this._api.getAllGames().subscribe({
  next:(res)=>{
this.gamesData=res
console.log(this.gamesData)
  }
})
  }

  ngOnInit(): void {
    this.getAll()
  }

}
