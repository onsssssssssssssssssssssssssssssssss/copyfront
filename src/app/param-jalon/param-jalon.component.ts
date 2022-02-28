import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { JalonService } from '../service/jalon.service';
import { PrestationService } from '../service/prestation.service';

@Component({
  selector: 'app-param-jalon',
  templateUrl: './param-jalon.component.html',
  styleUrls: ['./param-jalon.component.css']
})
export class ParamJalonComponent implements OnInit {
  lists= ['d', 'CIN', 'Demande']

  items  : any = [];
  prestations: any = [];

  basket = ['Debut Aps', 'Depos EBD', 'Patrimoine'];

  
  constructor(private jalonService: JalonService,private prestationService: PrestationService) { }

  ngOnInit(): void {

    this.prestationService.getPrestationList().subscribe(val=> {
      this.prestations=val;
      console.log(val);
      })
    
  }

  

  onChange($event:any) {
    console.log($event.target.value)
    
   
    this.jalonService.getJalonByPrest($event.target.value).subscribe(val=> {
      this.items=val;
      console.log(val);
      })
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.
}

drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

}
