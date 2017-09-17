

import{Injectable} from '@angular/core';
import{Item} from './item';
import{ITEMS} from './mock-items';
import{ReItem} from './reItem';


@Injectable()
export class AppService{
 
    getItems(): Promise<Item[]>{
        return Promise.resolve(ITEMS);
    }
    getOtherItems(): void{
        
    }
    name:string[];
    reItem:ReItem[];
   
    getAllNames(items:Item[]): ReItem[]{
        console.log('inside getallnames', ITEMS,this);
        this.name=[];

        var c1amt = ITEMS.filter(function(item){
            if(item.category == "C1"){
                return item.amount;
            }
        });
      console.log(c1amt);
      
     function cnameAmt( obj:Item[],n:string){
         var amt;
         for(var a=0;a<obj.length;a++){
             if(obj[a].name == n){
                 if(!obj[a].amount){
                     amt = "-";
                 }else{
                    amt=obj[a].amount;
                 }
             
             }
               
         }
         return amt;
     }
     console.log("c1 names ",cnameAmt(c1amt,'a1'));
        
      var c2amt = ITEMS.filter(function(item){
        if(item.category == "C2"){
            return item.amount;
        }
    });
       
    console.log(c2amt);

    var c3amt = ITEMS.filter(function(item){
        if(item.category == "C3"){
            return item.amount;
        }
    });
       
    console.log(c3amt);

    

    for(var i=0;i<ITEMS.length;i++){
        this.name.push(ITEMS[i].name);
    }

    function uniq(name:string) {
        return Array.from(new Set(name));
     }

     this.name = uniq(this.name);
     this.reItem = [];
     for(var t=0;t<this.name.length;t++){
      this.reItem.push({name:this.name[t], c1Amount: cnameAmt(c1amt,this.name[t]), c2Amount: cnameAmt(c2amt,this.name[t]),c3Amount: cnameAmt(c3amt,this.name[t]) });

     }
    console.log(this.reItem);
        return this.reItem
    }
}

