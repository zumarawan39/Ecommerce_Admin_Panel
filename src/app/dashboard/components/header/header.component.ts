import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public route:Router){

  }
  logOut(){
    let token=localStorage.removeItem('token');
   this.route.navigate(['login'])
    
  }
}
