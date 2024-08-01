import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardComponent } from './dashboard.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { authGuard } from '../guard/auth.guard';
import { ProductlistComponent } from './components/productlist/productlist.component';
const routes: Routes = [
  // { path: '', redirectTo: 'dashboard',pathMatch:'full' },
  { path: '', component: DashboardComponent, canActivate:[authGuard],
    children:[  
      { path: '', component: AddProductComponent  },
      { path: 'listProduct', component: ProductlistComponent  },
      { path: 'dashboard', component: DashboardComponent  },]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
