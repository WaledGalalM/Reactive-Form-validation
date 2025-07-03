import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder ,FormGroup, FormsModule, ReactiveFormsModule,Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Traning-form-validation';

}
