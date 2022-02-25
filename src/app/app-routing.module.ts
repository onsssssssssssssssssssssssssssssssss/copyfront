import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ParamJalonComponent } from './param-jalon/param-jalon.component';
=======
import { AjoutclientComponent } from './ajoutclient/ajoutclient.component';
import { AjoutmoeComponent } from './ajoutmoe/ajoutmoe.component';
import { CodeclientComponent } from './codeclient/codeclient.component';
import { NumebComponent } from './numeb/numeb.component';
>>>>>>> 605aa4374500bde51d174e2f811bb0aa1837e92c
import { SiteComponent } from './Site/site.component';


const routes: Routes = [
 
  {path:'site',component:SiteComponent},
<<<<<<< HEAD
  {path:'suivijallon',component :SuivijallonComponent},
  {path:'jalon',component :ParamJalonComponent}
=======
  {path:'codeclient',component:CodeclientComponent},
  {path:'EB',component:NumebComponent},
  {path:'ajoutclient',component:AjoutclientComponent},
  {path:'ajoutmoe',component:AjoutmoeComponent}

>>>>>>> 605aa4374500bde51d174e2f811bb0aa1837e92c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SiteComponent,CodeclientComponent,NumebComponent,AjoutclientComponent,AjoutmoeComponent]
