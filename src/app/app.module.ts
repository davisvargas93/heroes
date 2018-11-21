import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroreComponent } from './components/herore/herore.component';
import {APP_ROUTING} from './app.ruotes';
import {HeroesService} from './services/heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroreComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
