import { Component, OnInit } from '@angular/core';

import{Item} from './item';
import{AppService} from './app.service';



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
   <tr *ngFor="let item of items">
   <td>{{item.name}}</td>
   <td>{{item.category =="C1"}}</td>
   <td>{{item.category =="C2"}}</td>
   <td>{{item.category =="C3"}}</td>
   </tr>
  </tbody>
</table>`,
providers: [AppService]
})

export class RelistComponent implements OnInit { 
items:Item[];

constructor(private itemService:AppService){}

getItems():void{
  this.itemService.getItems().then(items => this.items = items);
}
 ngOnInit():void{
  this.getItems();

 }
             
               
  

}
