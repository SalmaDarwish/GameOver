import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading:boolean=false
  errorFromLogin:string=""
  loginForm: FormGroup=new FormGroup({
    email: new FormControl (null, [Validators.required, Validators.email]),
    password:new FormControl (null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,15}$/)]),
  })
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.loginForm.markAllAsTouched();
  }


  loginUser(form:FormGroup){
    this.loginForm.markAllAsTouched()
    if(form.valid){
      this.isLoading=true
      this._auth.signIn(form.value).subscribe({
        next:(data:any)=>{
          if(data.message=="success"){
            // Todo go to home
            this.isLoading=false
            localStorage.setItem("token",data.token);
            this._auth.savedUser()
            this._router.navigate(['/'])

          }else{
            this.errorFromLogin=data.message
          }
        }
      })
    }
  }

  forgetPassword(){
    // Swal.fire('ههه اعمل اكونت جديد')
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      text: 'ههه اعمل اكونت جديد',
      showCancelButton: true,
      confirmButtonText: 'ok',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['register'])

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'براحتك',
          
        )
      }
    })
  }



}
