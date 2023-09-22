import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
})
export class StudentsTableComponent {
  @Input() studentsList: { name: string; age: string }[] = [];
  removeStudent(i: number) {
    this.studentsList = this.studentsList.filter(
      (student, index) => index != i
    );
  }
}
