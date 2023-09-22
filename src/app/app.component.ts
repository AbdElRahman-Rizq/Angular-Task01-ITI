import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeComponent: string = 'home';
  dataFromStudentsList: any;
  execute(Component: any) {
    this.activeComponent = Component;
  }
  addStudent(studentData: any) {
    this.dataFromStudentsList = studentData;
  }
}
