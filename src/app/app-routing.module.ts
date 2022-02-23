import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeclientComponent } from './codeclient/codeclient.component';
import { NumebComponent } from './numeb/numeb.component';
import { SiteComponent } from './Site/site.component';

const routes: Routes = [
 
  {path:'site',component:SiteComponent},
  {path:'codeclient',component:CodeclientComponent},
  {path:'EB',component:NumebComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SiteComponent,CodeclientComponent,NumebComponent]
