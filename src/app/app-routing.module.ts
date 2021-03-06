import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamJalonComponent } from './param-jalon/param-jalon.component';
import { AjoutclientComponent } from './ajoutclient/ajoutclient.component';
import { AjoutmoeComponent } from './ajoutmoe/ajoutmoe.component';
import { CodeclientComponent } from './codeclient/codeclient.component';
import { NumebComponent } from './numeb/numeb.component';
import { SiteComponent } from './Site/site.component';


const routes: Routes = [
 
  {path:'site',component:SiteComponent},
 // {path:'suivijallon',component :SuivijallonComponent},
  {path:'jalon',component :ParamJalonComponent},
  {path:'codeclient',component:CodeclientComponent},
  {path:'EB',component:NumebComponent},
  {path:'ajoutclient',component:AjoutclientComponent},
  {path:'ajoutmoe',component:AjoutmoeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SiteComponent,CodeclientComponent,NumebComponent,AjoutclientComponent,AjoutmoeComponent]
