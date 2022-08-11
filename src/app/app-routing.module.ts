import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Vista2Component} from "./components/vista2/vista2.component";
import {Vista1Component} from "./components/vista1/vista1.component";


const routes: Routes = [
  { path: 'descarga-pdf', component: Vista2Component },
  { path: '**',  component: Vista1Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
