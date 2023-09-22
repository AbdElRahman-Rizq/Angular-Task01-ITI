import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
})
export class AddStudentsComponent implements OnInit {
  studentName: string = '';
  studentAge: string = '';
  studentsList: { name: string | null; age: string | null }[] = [];
  isValid: boolean = false;

  registerForm = new FormGroup({
    studentName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    studentAge: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(30),
    ]),
  });

  get getUsername() {
    return this.registerForm.controls['studentName'];
  }

  get getAge() {
    return this.registerForm.controls['studentAge'];
  }
  register(e: Event) {
    e.preventDefault();
    if (this.registerForm.status == 'VALID') {
      this.studentsList.push({
        name: this.getUsername.value,
        age: this.getAge.value,
      });
      console.log(this.studentsList);
    } else {
      console.log('Has Error');
    }
  }

  ngOnInit(): void {
    this.addEvent.emit(this.studentsList);
  }

  @Output() addEvent = new EventEmitter();
}
