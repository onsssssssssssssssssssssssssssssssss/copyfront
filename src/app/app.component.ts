import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CodeclientComponent } from './codeclient/codeclient.component';
import { SiteComponent } from './Site/site.component';
import { NumebComponent } from './numeb/numeb.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent  {
  title = 'projet en cours ';
  
}