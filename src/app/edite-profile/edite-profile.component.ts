import { Component,  input,  OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormsModule, ReactiveFormsModule,Validators  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../Service/form-data.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-edite-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './edite-profile.component.html',
  styleUrl: './edite-profile.component.css'
})
export class EditeProfileComponent implements OnInit {
  imagePreview:string = '';
  profileForm!:FormGroup
   submitted = false;
  constructor(private fb:FormBuilder ,
              private router:Router,
              private _FormDataService :FormDataService
  ) { }
  ngOnInit(): void {
    const savedData = this._FormDataService.getUserData();
    this.profileForm = this.fb.group({
  FirstName: [savedData?.FirstName || '', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
  LastName: [savedData?.LastName || '', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
  email: [savedData?.email || '', [Validators.required, Validators.email]],
  phone: [savedData?.phone || '', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(11), Validators.maxLength(11)]],
});
}

onSubmit(){
if(this.profileForm.valid){
  this.submitted = true
  let ValueForm = this.profileForm.value;
 this._FormDataService.saveUserData(ValueForm,this.imagePreview)
 this.router.navigate(['/profile'])
  window.alert("سيتم تعديل البيانات عند الضغط علي OK")

}
}


onImageSelected(event:any){
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
     reader.readAsDataURL(file);
     console.log('image previw in edite page ');
     console.log(reader);
  }
}




// validation phone
allowOnlyNumbers(event: KeyboardEvent): void {
  const input = event.target as HTMLInputElement;

  // لو الطول الحالي أكبر من أو يساوي 11 → امنع الكتابة
  if (input.value.length >= 11) {
    event.preventDefault();
    return;
  }

  // امنع أي شيء غير رقم
  const charCode = event.charCode;
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}



}
