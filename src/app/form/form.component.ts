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
  private uploadURL="";

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
     this.uploadURL = '../../../assets/default-user-image.png';
      this.locationService.get().subscribe(locations=>
      this.locations=locations
    );
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('' ,Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      lastName: this.formBuilder.control('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      gender: this.formBuilder.control('',Validators.required),
      dob: this.formBuilder.control('',Validators.required),
      nationality: this.formBuilder.control('',Validators.required),
      marital: this.formBuilder.control('',Validators.required),
      phone: this.formBuilder.control('',Validators.compose([
        Validators.required,
        Validators.pattern('[0-9\-\+\(\) ]*')
      ])),
      subDivision: this.formBuilder.control('',Validators.required),
      status: this.formBuilder.control('',Validators.required),
      suspendDate: this.formBuilder.control(''),
      hireDate: this.formBuilder.control('',Validators.required),
      division: this.formBuilder.control('',Validators.required),
      email: this.formBuilder.control('',[Validators.required,Validators.email]),
      locationId: this.formBuilder.control('',Validators.required),
      grade: this.formBuilder.control('',Validators.required),
      photo: this.formBuilder.control('')
    });
  }

  onSubmit(employee) {
    var location = {
      id: employee.locationId
    }
    employee.locationId=location;
    if(this.uploadURL != "src/images/no-image.png" && this.uploadURL != null){
      employee.photo = this.uploadURL;
    }
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
      if(this.employee.photo==null){
        this.uploadURL = '../../../assets/default-user-image.png';
      }
      else{
        this.uploadURL=this.employee.photo;
      }
    });
 
  }

  imgUpload(img){
    this.uploadURL=img.target.files;
    var image=new FileReader();
    image.onload= (photo: any)=>{
      this.uploadURL = photo.target.result;
    }
    image.readAsDataURL(img.target.files[0]);
    
  }
}
