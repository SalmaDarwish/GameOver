import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../game';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.scss']
})
export class SortbyComponent implements OnInit {
  x:any
  count:number=1;
  gamesData:Game[]=[]
  constructor(private _api:ApiService, private _activatedRoute:ActivatedRoute, private _Router:Router) { 
    this._activatedRoute.queryParamMap.subscribe(params=> {
      this.x=params.get('sort');
      this.getsort(this.x)
     })
  }
  getsort(sort:string){
    this._api.getsort(sort).subscribe({
      next:(res)=>{
        this.gamesData=res
        console.log(this.gamesData)
        
      }
    })
      }
  ngOnInit(): void {
  }

}
