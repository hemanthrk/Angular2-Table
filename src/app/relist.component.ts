import { Component, OnInit } from '@angular/core';

import{Item} from './item';
import{AppService} from './app.service';
import{ReItem} from './reItem';



@Component({
  selector: 'relist',
  template: ` <table id="data-table" class="table table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let item of reItem">
   <td>{{item.name}}</td>
   <td>{{item.c1Amount }}</td>
   <td>{{item.c2Amount }}</td>
   <td>{{item.c3Amount }}</td>
   </tr>
  </tbody>
</table>`,
providers: [AppService]
})

export class RelistComponent implements OnInit { 
items:Item[];
names:string[];
reItem:ReItem[];

constructor(private itemService:AppService){}

getItems():void{
  this.itemService.getItems().then(items => this.items = items);
}
 ngOnInit():void{
  this.getItems();
    console.log("inside relist",this);  
    this.getAllNames();
 }
             
   getAllNames():void{
       
       this.reItem = this.itemService.getAllNames(this.items);
   }        
  

}
