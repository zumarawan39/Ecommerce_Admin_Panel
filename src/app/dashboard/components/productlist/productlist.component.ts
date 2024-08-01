import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../../service/dash-board.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any[] = []; // To store products data

  constructor(private apiservice: DashBoardService) {}

  ngOnInit(): void {
    this.apiservice.showData().subscribe(
      (res) => {
        console.log(res);
        this.products = res; 
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
