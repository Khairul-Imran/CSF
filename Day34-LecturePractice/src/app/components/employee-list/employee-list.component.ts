import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from '../employee-add-edit/employee-add-edit.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  
  displayedColumns: string[] = [ // This name of the array is used in the html!!****
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'salary',
    'action' // Action
  ]
  
  dataSource!: MatTableDataSource<any>;
  
  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {} // Need to inject for the dialog.

  // Just testing
  // private fb: EmployeeService = inject(EmployeeService);

  ngOnInit(): void {
    this.fetchEmployeeData();
  }
  
  fetchEmployeeData() {
    // Observable
    this.employeeService.getEmployees().subscribe({
      // This are optional function inside the subscribe function. If you don't have any post-processing to do, then don't need.
      next: (data) => {
        this.dataSource = new MatTableDataSource<any>(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
  
      }
    });
  }

  openAddNewEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        alert("New Record Created!")
        // if (result) {
        //   this.fetchEmployeeData();
        // }
      },
      complete: () => {
        this.fetchEmployeeData();
      }
    });
  }

  deleteEmployee(id: number) {
    // Observable -> need to sub
    this.employeeService.deleteEmployee(id).subscribe({
      next: (result) => {
        alert("Employee Deleted!");
        this.fetchEmployeeData();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  editEmployee(data: any) {
    const dialogRef = this.dialog.open(EmployeeAddEditComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.fetchEmployeeData();
        }
      }
    });
  }
  
}
