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

import { ParamJalonComponent } from './param-jalon/param-jalon.component';

import { CodeclientComponent } from './codeclient/codeclient.component';
import { NumebComponent } from './numeb/numeb.component';
import { siteservice } from './service/site.service';
import { HttpClientModule } from '@angular/common/http';
import { AjoutclientComponent } from './ajoutclient/ajoutclient.component';
import { AjoutmoeComponent } from './ajoutmoe/ajoutmoe.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SiteComponent,
   // AffichageComponent,
    ParamJalonComponent ,
    CodeclientComponent,
    NumebComponent,
    AjoutclientComponent,
    AjoutmoeComponent,

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
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
 ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [siteservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
