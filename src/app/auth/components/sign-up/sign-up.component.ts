import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  sign_in!: FormGroup;  

  constructor(private fb: FormBuilder,public route:Router,public apiservice:AuthServiceService) {
    this.sign_in = this.fb.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      c_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {  
    event.preventDefault(); 
    
    if (this.sign_in.valid) {
      console.log('Form Submitted', this.sign_in.value);
      let data=this.sign_in.value;
      console.log(data);
      
      this.apiservice.Sign_in(data).subscribe(
        response => {
          console.log('API response', response);
        },
        error => {
          console.error('API error', error);
        });
      this.route.navigate(['login'])
      
    } else {
      alert("Please check your form information.");
    }
  }

  passwordMatchValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('password')?.value;
    const c_password = formGroup.get('c_password')?.value;
    return password === c_password ? null : { mismatch: true };
  }

  get name() {
    return this.sign_in.controls['name'];
  }

  get email() {
    return this.sign_in.controls['email'];
  }

  get number() {
    return this.sign_in.controls['number'];
  }

  get password() {
    return this.sign_in.controls['password'];
  }

  get c_password() {
    return this.sign_in.controls['c_password'];
  }
}
