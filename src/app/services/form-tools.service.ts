import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormTools {

  constructor() { }

  onlyNumber(key: any){
    if(key.charCode >= 48 && key.charCode <= 57){
      return true;
    } else {
      return false;
    }
  }
}
