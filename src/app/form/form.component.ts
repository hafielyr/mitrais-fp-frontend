import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { lookupListToken } from '../providers';
import { Employee } from "app/employee.model";
import { LocationService } from '../location.service';
import { Location } from '../location.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;
  locationId;
  num:number=1;
  private locations:Location[];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router,
    private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.get().subscribe(locations=>
      this.locations=locations
    );
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      dob: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      martial: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hireDate: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      location: this.formBuilder.control('')
    });
  }

  onSubmit(employee: Employee) {
    var jsonLocation={
        id: this.num
    }
    employee.locationId=jsonLocation;
    console.log(JSON.stringify(employee));
    this.employeeService.add(employee)
      .subscribe(() => {
        this.router.navigate(['/add']);
      });
  }

}
