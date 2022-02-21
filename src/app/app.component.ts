import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SiteComponent } from './Site/site.component';
import { SuivijallonComponent } from './suivijallon/suivijallon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit  {
  title = 'projet en cours ';

  public list=["Hivory","dispo"]
  public c: any ;  
  condname: any;
  form: FormGroup;
  tab:any;
  refer: any;
  form1: FormGroup;
  target: any;
  ngOnInit() {

  }
  comp:any;
  detectcomp(comp:any){
    if (comp==="site"){
      this.comp=SiteComponent;
    }
  }
  constructor(private fb: FormBuilder
    ){
    this.form =new FormGroup({
      eb : new FormControl(''),
      numcommande:new FormControl(''),
      codesite: new FormControl(''),
      client: new FormControl(''),
      ref:new FormControl(''),

    });
    {
      this.form1= new FormGroup ({
       refer: new FormControl(''),
     libelle:new FormControl(''),
      typecommande: new FormControl(''),
      client: new FormControl(''),
      montants:new FormControl(''),
      recep:new FormControl(''),
      date:new FormControl(''),
      eb:new FormControl(''),
      Statut:new FormControl('')
      
      }) 
    }
    this.tab= {
      refer:'xxxxx',
      libelle:'yyyyy',
      typecommande:'typex',
      montants:'tholla',
      recep:'ouiiii',
    date:"17/06/1995",
  eb:"eb123",
Statut:"creer"}
    
  }
  
cond1:String='EB123';
 x:Boolean=true ;
 y:Boolean=true ;
 z:Boolean=true ;
 toBeDeleted = 0;
onChange($event:any) {
  console.log($event.target.value)
  this.x=true ;
  this.form.get('eb')?.setValue("Hivory");
  this.form.get('numcommande')?.setValue("receptioner");
  this.form.get('codesite')?.setValue("sitex");
  this.form.get('client')?.setValue("clientx");
  
  


}

codes:Boolean=true;
onChangecodesite($event: any){
  this.codes=true ;
  this.comp=SiteComponent;
  this.form.get('ref')?.setValue("referencexxx");



}
 deleteRow(refer :String){
  for(let i = 0; i < this.tab.length; ++i){
      if (this.tab[i].id === refer) {
          this.tab.splice(i,1);}
      }}}