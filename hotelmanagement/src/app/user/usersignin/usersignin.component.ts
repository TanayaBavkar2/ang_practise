import { Component } from '@angular/core';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.scss']
})
export class UsersigninComponent {
  
 
  responseData : any;
  signINForm: any;
  signInForm: any;

  

  async submit(data:any){
    console.log(data,'data');
    this.signInForm = data;
}
}
