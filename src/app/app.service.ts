

import{Injectable} from '@angular/core';
import{Item} from './item';
import{ITEMS} from './mock-items';


@Injectable()
export class AppService{
    getItems(): Promise<Item[]>{
        return Promise.resolve(ITEMS);
    }
}

