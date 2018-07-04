
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { GlobalService } from '../../service/global.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomValidators } from '../../validator/CustomValidators';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../entity/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  isRegisterSubmitted: boolean = false;
  message: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, 
    private globalService: GlobalService, private router: Router,
    private translate: TranslateService, private customerService: CustomerService) {  
      translate.use("login-vn");
  }

  ngOnInit() {
    this.loginForm = this.initLoginForm();
    this.registerForm = this.initRegisterForm();
  }

  login(){
    this.isSubmitted = true;
    if(this.loginForm.valid){
      return this.loginService.login(this.loginForm.value.loginId, this.loginForm.value.password).subscribe(
        data => {
          if(data.text() == 'LOGIN_ID_NOT_EXIST' || data.text() == 'PASSWORD_INCORRECT'){
            this.loginForm.setErrors({
              loginError:{message: data.text()}
            });
            console.log(this.loginForm);
          } else {
            this.globalService.setCookie(this.globalService.userCookie, data.text(), 2);
            this.router.navigateByUrl("/", { skipLocationChange: false });
          }
          
        },
        (error : Response) =>{
          throw error;
        }
      )
    }
  }

  register(){
    this.isRegisterSubmitted = true;
    this.message = '';
    if(this.registerForm.value.password != this.registerForm.value.repeatPassword){
      this.registerForm.setErrors({
        passwordNotMatch: true
      });
      return;
    }

    if(this.registerForm.valid){
      this.customerService.isLoginIdExist(this.registerForm.value.loginId).subscribe(
        response =>{
          if(response.text()=='true'){
          this.registerForm.controls['loginId'].setErrors({
            exist: true
          });
        } else {
          let customer = new Customer().deserialize(this.registerForm.value);
          this.customerService.save(customer).subscribe(response=>{
            if(response.text() == 'true'){
              this.isRegisterSubmitted = false;
              this.message = "ACTION_SUCCESS";
              this.resetRegisterForm();
            }
          },(error : Response) =>{
            throw error;
          });
        }
      },(error : Response) =>{
        throw error;
      });
    }
  }

  initLoginForm(){
    return this.fb.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initRegisterForm(){
    return this.fb.group({
      loginId: ['', [Validators.required, Validators.email, CustomValidators.notContainSpace]],
      password: ['', [Validators.required, CustomValidators.notContainSpace]],
      repeatPassword: ['', Validators.required],
    });
  }

  resetRegisterForm(){
    this.registerForm.clearValidators;
    this.registerForm.reset({loginId:"",password:"",repeatPassword:""});
  }

}
