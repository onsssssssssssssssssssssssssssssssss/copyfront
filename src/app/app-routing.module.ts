import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './Site/site.component';
import { SuivijallonComponent } from './suivijallon/suivijallon.component';

const routes: Routes = [
 
  {path:'site',component:SiteComponent},
  {path:'suivijallon',component :SuivijallonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SiteComponent,SuivijallonComponent]
