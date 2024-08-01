import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductlistComponent } from './components/productlist/productlist.component';


@NgModule({
  declarations: [
    AddProductComponent,
    HeaderComponent,
    FooterComponent,
    AsidebarComponent,
    DashboardComponent,
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
