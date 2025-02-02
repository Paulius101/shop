import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from "./components/item-list/item-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {CartComponent} from "./components/cart/cart.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {AddItemFormComponent} from "./components/add-item-form/add-item-form.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'items',
    component: ItemListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'add-item',
    component: AddItemFormComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'payment',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
  {
    path: 'details',
    component: UserDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}