import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { lookupListToken } from '../providers';
import { Employee } from "app/employee.model";
import { LocationService } from '../location.service';
import { Location } from '../location.model';
import { ReloadpageService} from '../reloadpage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;
  private employeeId;
  private employee:Employee;
  private show:boolean;
  private locations:Location[];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router,
    private locationService: LocationService,
    private activatedRoute:ActivatedRoute,
    private reloadpageService: ReloadpageService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
     params=>{
            if(params['id']){
              this.employeeId=params['id'];
            this.getEmployee(params['id']);
            }
     });
    this.locationService.get().subscribe(locations=>
      this.locations=locations
    );
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      dob: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      marital: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hireDate: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      locationId: this.formBuilder.control(''),
      grade: this.formBuilder.control('')
    });
  }

  onSubmit(employee) {
    var location = {
      id: employee.locationId
    }
    employee.locationId=location;
    console.log(JSON.stringify(employee));
    if(!this.employee){
    this.employeeService.add(employee)
      .subscribe(() => {
        this.router.navigate(['/add']);
        this.reloadpageService.notifyOther({ option: 'updateList', value: 'updateList' });
      });
    }else{
      this.employeeService.update(employee,this.employeeId)
      .subscribe(()=>{this.router.navigate(['/add']);
        this.reloadpageService.notifyOther({ option: 'updateList', value: 'updateList' });});
    }
  }

  getEmployee(id){
    this.employeeService.getEmployee(id).subscribe(employe=>{
      this.employee=employe;
      if(this.employee==null){
        this.show=false;
      }
      else{
        this.show=true;
      }
    });
  }
}
