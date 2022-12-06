import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Game } from '../game';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {
  x:any
  count:number=1;
  gamesData:Game[]=[]
  constructor(private _api:ApiService, private _activatedRoute:ActivatedRoute, private _Router:Router) { 
   this._activatedRoute.queryParamMap.subscribe(params=> {
    this.x=params.get('type');
    this.getPlatform(this.x)
   })

  


  }
  getPlatform(type:string){
this._api.getPlatform(type).subscribe({
  next:(res)=>{
    this.gamesData=res
    console.log(this.gamesData)
  }
})
  }

ngOnInit(): void {

}

}
