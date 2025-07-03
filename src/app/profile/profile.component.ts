import { Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataService } from '../Service/form-data.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule,NgIf,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
constructor(private _FormDataService:FormDataService) {

}
userDataSendAfterService: any

  ngOnInit(): void {
    this.userDataSendAfterService = this._FormDataService.userData;
    // console.log(this.userDataSendAfterService,' data in profile page ');
}


}
