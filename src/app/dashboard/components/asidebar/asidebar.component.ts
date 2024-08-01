import { Component } from '@angular/core';
import { DashBoardService } from '../../service/dash-board.service';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent {
  constructor(private apiservice:DashBoardService){}
  allUser(){
     
  }

}
