import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCocinaComponent } from './components/lista-cocina/lista-cocina.component';
import { AltaCocinaComponent } from './components/alta-cocina/alta-cocina.component';

const routes: Routes = [
  {path:"cocinas", component:ListaCocinaComponent},
  {path:"alta-cocinas", component:AltaCocinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
