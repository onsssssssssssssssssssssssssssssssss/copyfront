import { NgModule } from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteComponent } from './Site/site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ParamJalonComponent } from './param-jalon/param-jalon.component';
=======
import { CodeclientComponent } from './codeclient/codeclient.component';
import { NumebComponent } from './numeb/numeb.component';
import { siteservice } from './service/site.service';
import { HttpClientModule } from '@angular/common/http';
import { AjoutclientComponent } from './ajoutclient/ajoutclient.component';
import { AjoutmoeComponent } from './ajoutmoe/ajoutmoe.component';
>>>>>>> 605aa4374500bde51d174e2f811bb0aa1837e92c
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SiteComponent,
<<<<<<< HEAD
    AffichageComponent,
    ParamJalonComponent ,
=======
    CodeclientComponent,
    NumebComponent,
    AjoutclientComponent,
    AjoutmoeComponent
>>>>>>> 605aa4374500bde51d174e2f811bb0aa1837e92c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    DragDropModule,
=======
    MatButtonModule,
    MatIconModule,
    HttpClientModule
>>>>>>> 605aa4374500bde51d174e2f811bb0aa1837e92c
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [siteservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
