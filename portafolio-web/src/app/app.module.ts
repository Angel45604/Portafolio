import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



import { AppComponent } from './app.component';
import { NotFoundComponent } from './notFoundComponent/notFound.component';
import { InitComponent } from './init.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    MatCardModule,
    MatDividerModule

    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpModule
  ],
  bootstrap: [InitComponent],
})
export class AppModule { }
