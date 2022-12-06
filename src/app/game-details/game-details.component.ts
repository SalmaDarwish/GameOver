import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  showShortDesciption:boolean = true

  x:any
  y:any
  count:number=1;
  game:Game={}

  constructor(private _api:ApiService, private _activatedRoute:ActivatedRoute, private _Router:Router) { 
    this._activatedRoute.queryParamMap.subscribe(params=> {
      this.x=params.get('id');
      this.y=params.get('cat')
      this.getDetails(this.x)
  
     })
  }
  getDetails(id:string){
    this._api.getDetails(id).subscribe({
      next:(res)=>{
        this.game=res
        console.log(this.game)
      }
    })
      }
    getCat(cat:string){
      if (this.game.genre!="Card Game")
      {this._Router.navigate(
        ['/categories'],
        {queryParams:{cat:this.y}}
      )}
      

    }


    alterDescriptionText() {
       this.showShortDesciption = !this.showShortDesciption
    }
   
  ngOnInit(): void {
  }

}
