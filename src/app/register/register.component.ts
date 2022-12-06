import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLoading:boolean=false
  errorFromRegister:string=""
  registerForm: FormGroup=new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl (null, [Validators.required, Validators.email]),
    password:new FormControl (null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,15}$/)]),
    age : new FormControl (null,[Validators.required, Validators.min(18),Validators.max(40)]),
  })
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.registerForm.markAllAsTouched();
  }


  registerUser(form:FormGroup){
    this.registerForm.markAllAsTouched()
    if(form.valid){
      this.isLoading=true
      this._auth.signUp(form.value).subscribe({
        next:(data:any)=>{
          if(data.message=="success"){
            // Todo go to login
            this.isLoading=false
            this._router.navigate(['/login'])

          }else{
            this.errorFromRegister=data.message;
            this.isLoading=false
          }
        }
      })
    }
  }

 

}
