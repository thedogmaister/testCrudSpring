import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TableModule} from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FromCpt } from './testCrud/form/cpt';
import { SearchCpt } from './testCrud/search/cpt';


const routes: Routes = [
  
  { path: 'search', component: SearchCpt },

  { path: 'form', component: FromCpt }
];

@NgModule({
  declarations: [
    AppComponent,
    FromCpt,
    SearchCpt
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    FromCpt,
    SearchCpt
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
