import { NgModule } from '@angular/core';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteComponent } from './Site/site.component';
import { AffichageComponent } from './affichage/affichage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParamJalonComponent } from './param-jalon/param-jalon.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SiteComponent,
    AffichageComponent,
    ParamJalonComponent ,
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
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
