import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pc:string="pc"
browser:string="browser"

  isLogin:boolean=false;

  constructor(private _auth:AuthService, private _router:Router) { 
    
  
  }

  ngOnInit(): void {
   this._auth.userData.subscribe({
    next:(data:any)=>{
      if(this._auth.userData.getValue()){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }

    }
   })
  }
  logOut(){
    this._auth.logOut()
  }

 

}
