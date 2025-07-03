import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  userData:any = {}

  constructor() { }

  saveUserData(dataFromEditeProfile:any ,imageUser:any){
    this.userData = {
      ...dataFromEditeProfile,
      Image:imageUser
    };

    console.log(this.userData,'userData Service');
  }


  getUserData():any{
      return this.userData

  }

}





export interface IuserData{
  FristName:string,
  LastName:string,
  email:string,
  phone:number
}
