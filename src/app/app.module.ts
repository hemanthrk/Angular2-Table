import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import{HttpModule} from '@angular/http';
import{RelistComponent} from './relist.component';
import {ListComponent} from './list.component';



@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot([
    {
      path: 'relist',
      component:RelistComponent
    },
    {
      path: 'list',
      component: ListComponent
    },{
      path:'',
      redirectTo: 'list',
      pathMatch:'full'
    }
  ])
 ],
  declarations: [ AppComponent,RelistComponent ,ListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
