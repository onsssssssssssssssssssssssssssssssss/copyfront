import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamJalonComponent } from './param-jalon/param-jalon.component';
import { SiteComponent } from './Site/site.component';
import { SuivijallonComponent } from './suivijallon/suivijallon.component';

const routes: Routes = [
 
  {path:'site',component:SiteComponent},
  {path:'suivijallon',component :SuivijallonComponent},
  {path:'jalon',component :ParamJalonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SiteComponent,SuivijallonComponent]
