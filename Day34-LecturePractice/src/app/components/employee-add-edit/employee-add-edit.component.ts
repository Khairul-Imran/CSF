import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrl: './employee-add-edit.component.css'
})
export class EmployeeAddEditComponent implements OnInit {

  employeeForm!: FormGroup;

  // Try changing this to how chuk did it.
  constructor(private employeeService: EmployeeService, 
    private dialogReference: MatDialogRef<EmployeeAddEditComponent>, 
    private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.employeeForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        salary: ['', Validators.required]
      });
  }

  ngOnInit(): void{
    this.employeeForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.data) {
        // Update
        this.employeeService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (val) => {
            alert("Record updated successfully.");
            this.dialogReference.close();
          },
          error: (err) => {
            console.error("Error updating employee record.");
          }
        });
      } else {
        // Create
        this.employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: (val) => {
            alert("Record added successfully.");
            this.dialogReference.close();
          },
          error: (err) => {
            console.error("Error adding employee record.");
          }
        });


      }
    }
  }

}
