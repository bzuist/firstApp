import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {

  students: Student[];
  constructor(private baseService: BaseServiceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.students = [{id: 0, name: 'Имя', surname: 'Фамилия'},
      {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
      {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}
    ];
    console.log("TableStudentsComponent");
    this.students = this.baseService.getAllStudents();
  }

}
