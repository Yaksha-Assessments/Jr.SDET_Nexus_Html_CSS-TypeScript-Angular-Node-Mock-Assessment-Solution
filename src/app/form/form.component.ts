import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  // Import NgForm to work with template-driven forms

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  submittedUser: any = null;  // Variable to store the user data after submission

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedUser = { ...this.user };  // Store the submitted user data
      console.log('Form Submitted!', form.value);  // You can replace this with actual form submission logic
    } else {
      console.log('Form is not valid');
    }
  }
}
