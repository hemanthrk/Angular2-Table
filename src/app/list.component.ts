import { Component, OnInit } from '@angular/core';

import{Item} from './item';
import{AppService} from './app.service';



@Component({
  selector: 'my-list',
  template: `
   <table id="data-table" class="table table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Category</th>
      <th>Amount</th>
      
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let item of items" (click)=onSelect(item)>
   <td>{{item.name}}</td>
   <td>{{item.category}}</td>
   <td>{{item.amount}}</td>
   </tr>
  </tbody>
</table>`,
providers: [AppService]
})

export class ListComponent implements OnInit { 
items:Item[];
item:Item;
onSelect(item:Item):void{
    this.item = item;
    console.log("inside on click", this, this.item)
}

constructor(private itemService:AppService){}

getItems():void{
  this.itemService.getItems().then(items => this.items = items);
}
 ngOnInit():void{
  this.getItems();
console.log("inside lifecycle hook of list", this);
 }
             
               
  

}
