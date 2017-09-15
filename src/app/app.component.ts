
import{Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Lists</h1> <nav><a routerLink="/relist">Relist</a> <a routerLink="/list">Items</a></nav><router-outlet></router-outlet>'
})
export class AppComponent{

}