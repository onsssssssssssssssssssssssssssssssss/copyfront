import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormGroup, Validators } from '@angular/forms';
import { NumebComponent } from '../numeb/numeb.component';
import { site } from '../classe/site';
import { siteService } from '../service/site.service';
import { Subscription } from 'rxjs';
import { ClientService } from '../service/client.service';
import { CodeclientComponent } from '../codeclient/codeclient.component';
import { clients } from '../classe/clients';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent  implements OnInit,AfterViewInit {
  [x: string]: any;
  sites: any = [];
  siteType: any = [];
  public form: FormGroup;
  clien :any = [];
  sitetype: { id: number; code: number; name: string; typeStructure: string; }[] = [];
  clienttype:any=[];
  dossier: any;
  constructor(
    private siteService:siteService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.siteService.getsiteList().subscribe((data: any) => {
      console.log(data)
      this.sites= data;
      console.log(this.sites);
    })
    this.clientService.getclientList().subscribe((data1: any) => {
      console.log(data1)
      this.clienttype= data1;
      console.log(this.client);
    })
    
   
    this.form = this.formBuilder.group({
  
      typ:[''],
      code:[''],
      Hauteur:[''],
      clientt:[''],
      payOrg: [''],
      payAcc: [''],
      etat: [''],
      clientx:[''],
      modele:[''] 
    });
   

  }

  ngOnInit() {
    //mock the folder type
    this.sitetype = [
    
     
    ];

   
    this.route.queryParams.subscribe((data) => {
      data &&
        data.formSearch &&
        this.clientService.getById(data.formSearch.value).subscribe((val: any)=> {
          this.compo=CodeclientComponent;
          console.log(val);
         

            },(error: any) => {
             console.log(error)
            });

          } );

  




  }
  ngAfterViewInit() {

  }

 
  // get edit inteface for the selected folder

  // search for folders with criteria

  getClient(){
    this.clientService.getclientList().subscribe(data => {
      this.clienttype=data;
    })
  }

  
x:boolean=true
  onChange($event:any) {
    this.x=true ;
    console.log($event.target.value)
    console.log(this.form.controls.typ.value);
   this.form.get('typ')?.setValue($event.target.value)
    this.siteService.getSiteByCode($event.target.value).subscribe((val: any) => {
     this.sitetype= val;
     this.form.get('Hauteur')?.setValue(val[1].height)
     this.form.get('modele')?.setValue(val[2].typeStructure )

    

      })
     
       }



       compo:any
      xx:boolean=true
       onChange2($event:any){
        this.router.navigate(['/codeclient']);

      
    

     
     
     
          

       }
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.


}

