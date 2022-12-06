import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Game } from '../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeGames:any[]=[]
  gamesData:Game[]=[]
  constructor(private _api:ApiService) {
    this.homeGames=new Array(3)

   }
  getGames(){
     this._api.getAllGames().subscribe({
      next:(res)=>{
        this.gamesData=res.slice(0,3)
        console.log(res)
      }

  })
  }
 

  ngOnInit(): void {
    this.getGames()
  }

}
