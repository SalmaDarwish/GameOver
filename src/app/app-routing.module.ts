import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegGuard } from './reg.guard';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { GamesComponent } from './games/games.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [

  {path:"", redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"register", canActivate:[RegGuard] , component:RegisterComponent},
  {path:"login", canActivate:[RegGuard] , component:LoginComponent},
  {path:"games" ,component:GamesComponent},
  {path:"platforms" ,component:PlatformsComponent},
  {path:"platforms" ,component:PlatformsComponent},
  {path:"sortby" ,component:SortbyComponent},
  {path:"categories" ,component:CategoriesComponent},
  {path:"details" ,component:GameDetailsComponent},












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
