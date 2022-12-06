import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { LoadingComponent } from './loading/loading.component';
import { ItemComponent } from './item/item.component';
import { CutTextPipe } from './cut-text.pipe';
import { PlatformsComponent } from './platforms/platforms.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    GamesComponent,
    LoadingComponent,
    ItemComponent,
    CutTextPipe,
    PlatformsComponent,
    SeeMoreComponent,
    SortbyComponent,
    CategoriesComponent,
    GameDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
