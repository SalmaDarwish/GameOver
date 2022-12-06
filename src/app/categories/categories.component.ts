import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../game';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  x:any
  count:number=1;
  gamesData:Game[]=[]
  constructor(private _api:ApiService, private _activatedRoute:ActivatedRoute, private _Router:Router) { 
    this._activatedRoute.queryParamMap.subscribe(params=> {
      this.x=params.get('cat');
      this.getCat(this.x)
     })
  }
  getCat(cat:string){
    this._api.getCat(cat).subscribe({
      next:(res)=>{
        this.gamesData=res
        console.log(this.gamesData)
        
      }
    })
      }
   ngOnInit(): void {
  }
  }

 


