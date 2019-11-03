import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRole } from './core/models';
import { AuthGuard, RoleGuard } from './core/guards';

import { CartComponent } from './cart';
import { CreateOrderComponent } from './orders';
import { ProductDetailsComponent, ProductListComponent } from './products';
import { PageNotFoundComponent } from './components';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'product-list'
}, {
  path: 'product-list',
  component: ProductListComponent
}, {
  path: 'product/:productID',
  component: ProductDetailsComponent
}, {
  path: 'cart',
  component: CartComponent
}, {
  path: 'order',
  component: CreateOrderComponent
}, {
  path: 'auth',
  canLoad: [AuthGuard],
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'admin',
  canLoad: [AuthGuard, RoleGuard],
  data: {
    roles: [UserRole.ADMIN]
  },
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}