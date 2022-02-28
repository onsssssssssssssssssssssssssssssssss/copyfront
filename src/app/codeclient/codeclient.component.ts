import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clients } from '../classe/clients';
import { ClientService } from '../service/client.service';
import { siteService } from '../service/site.service';

@Component({
  selector: 'app-codeclient',
  templateUrl: './codeclient.component.html',
  styleUrls: ['./codeclient.component.css']
})
export class CodeclientComponent implements OnInit {

  [x: string]: any;
  sites: any = [];
  siteType1: any = [];
  public form1: FormGroup;
  clien :any = [];
  clienttype:any=[];
  dossier: any;
  constructor(
    private siteService: siteService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  
    this.clientService.getclientList().subscribe((data1: any) => {
      console.log(data1)
      this.clienttype= data1;
      console.log(this.client);
    })
    
    this.siteService.getsiteList().subscribe((data1: any) => {
      console.log(data1)
      this.siteType1= data1;
      console.log(this.client);
    })
    this.form1 = this.formBuilder.group({
  
      typ:[''],
      code:[''],
      Hauteur:[''],
      clientt:[''],
      payOrg: [''],
      payAcc: [''],
      etat: [''],
      clientx:['']
 
    });
   

  }

  ngOnInit() {
    //mock the folder type
    this.sitetype1 = [
    
     
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
   
  this.router.navigate(['/site']);

    
    }



       compo:any
      xx:boolean=true
    onChangeclient($event:any){
      this.xx=true ;
      console.log($event.target.value)
      console.log(this.form1.controls.typ.value);
     this.form1.get('clientx')?.setValue($event.target.value)
      this.clientService.getById($event.target.value).subscribe((val: any) => {
       this.sitetype1= val;
      
  
        })
       }
    

      }
       
    

