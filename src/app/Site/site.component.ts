import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormGroup, Validators } from '@angular/forms';
import { siteservice } from '../service/site.service';
import { CodeclientComponent } from '../codeclient/codeclient.component';
import { NumebComponent } from '../numeb/numeb.component';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent  implements OnInit,AfterViewInit {
  site: any = [];
  comp:any;
  details: { id: string; 
    eb: string;
    codesite:String;
    idclient:String;
    numcommande:String,
    TotalHt:String,
    StatutCommande:String,
    CDP:String,
    Designation:String,
    DatecommandeBS:String,
    Datefin:String,
    commentaire:String
   }[] = [];
  public c: any ;  
  condname: any;
  form: FormGroup;
  tab:any;
  refer: any;
  
  target: any;

  constructor(
    private siteService: siteservice,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.siteService.getsiteList().subscribe((data: any) => {
      console.log(data)
      this.site= data;
      console.log(this.site);
    })
    this.form =new FormGroup({
      eb : new FormControl(''),
      numcommande:new FormControl(''),
      codesite: new FormControl(''),
      client: new FormControl(''),
      ref:new FormControl(''),

    });
    {
      this.siteService.getsiteList().subscribe((data: any) => {
        console.log(data)
        this.site= data;
        console.log(this.site);
      })
      this.form = this.formBuilder.group({
        id: [''],
        eb: [''],
        codesite: [''],
        idclient: [''],
        TotalHt: [''],
        StatutCommande: [''],
        CDP: [''],
        Designation: [''],
        DatecommandeBS: [''],
        Datefin: [''],
        commentaire: ['']
      });
     }}
  ngOnInit(): void {
    this.details = [
      {
        id: '1',
       eb: '5',
       codesite:'630865',
       numcommande:"CA21_029800",
       idclient:'Hivory',
       TotalHt:'400,00€',
       StatutCommande:'Facture',
       CDP:'Ashikh',
       Designation:'Modelisation+NDC',
       DatecommandeBS:"17/10/2016",
       Datefin:"17/12/2016",
        commentaire:"xxxxxxxxx",

      },
      {
        id: '2',
        eb: '6',
        codesite:'630889',
        numcommande:"CA21_029800",
        idclient:'Orange',
        TotalHt:'400,00€',
        StatutCommande:'Facture',
        CDP:'Ashkiri',    
           Designation:'Modelisation',
           DatecommandeBS:"20/10/2018",
           Datefin:"17/12/2018",
        commentaire:'yyyyyyy',
      },
      {
        id: '3',
       eb: 'eb125',
       codesite:'630',
       numcommande:"CA21_55555",
       idclient:'Hivory',
       TotalHt:'400,00€',
       StatutCommande:'Facture',
       CDP:'Ashikh',
       Designation:'Modelisation+NDC',
       DatecommandeBS:"17/10/2016",
       Datefin:"17/12/2016",
        commentaire:"xxxxxxxxx",

      }
    ];
  
  
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
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
  this.comp=NumebComponent ;

}

codes:Boolean=true;
onChangecodesite($event: any){
  this.codes=true ;
  this.form.get('eb')?.setValue("Hivory");
  this.form.get('numcommande')?.setValue("receptioner");
  this.form.get('codesite')?.setValue("codex");
  this.form.get('client')?.setValue("clientx");
  console.log(this.form.controls.typ.value);
  this.form.get('typ')?.setValue($event.target.value)

}



   
client:Boolean=true;
onChangecodeclient($event: any){
  this.client=true ;
}
getsites(){

  this.siteService.getsiteList().subscribe((data: {}) => {
    this.site = data;
  });
 
}


  
}

