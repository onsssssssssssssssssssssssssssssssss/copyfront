import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuivijallonComponent } from './suivijallon.component';

const routes: Routes = [
  {path:'suivijallon',component :SuivijallonComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SuivijallonComponent]
