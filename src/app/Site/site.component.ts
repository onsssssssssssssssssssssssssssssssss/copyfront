import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent  implements OnInit{
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
  ngOnInit(){
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
    ];
  }
  
  }


