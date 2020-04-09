import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { EquationListComponent } from './equation-list/equation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    EquationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
