import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  method: string = 'phone number';
  showUserName: boolean = true;
  username = 'jyothsna';
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createform();
  }
  userdata = [
    { username: 'jyothsna', mobilenumber: 67823826347, password: 'jDhjksc' },
    { username: 'haripoter', mobilenumber: 67823826347, password: 'jDhjksc' },
    { username: 'niha', mobilenumber: 67823826347, password: 'jDhjksc' },
    { username: 'chandu', mobilenumber: 67823826347, password: 'jDhjksc' },
    { username: 'sri', mobilenumber: 67823826347, password: 'jDhjksc' },
    { username: 'manu', mobilenumber: 67823826347, password: 'jDhjksc' },
    { username: 'divya', mobilenumber: 67823826347, password: 'jDhjksc' },
  ];

  changeField() {
    if (this.showUserName) {
      this.method = 'username';
      this.showUserName = false;
      this.username = 'mobilenumber';
    } else {
      this.method = 'mobilenumber';
      this.username = 'username';
      this.showUserName = true;
    }
  }

  createform() {
    console.log('jkad');
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  submit() {
    console.log(
      this.form.controls['username'].value,
      this.form.controls['password'].value
    );
    let a = this.form.controls['username'].value;
    let b = this.form.controls['password'].value;

    this.userdata.filter((item) => {
      if (a == item.username && b == item.password) {
        alert('welcome');
      } else {
        alert('nooooo!');
      }
    });
  }
}
