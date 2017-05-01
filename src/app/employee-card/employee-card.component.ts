import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent  {
  
  @Input() employee;
  @Input() selectedEmployee;
  @Output() throwEmployee = new EventEmitter();
  employeeId;
  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute){}

  OnInit(){
    this.activatedRoute.params.subscribe(
     params=>{
            if(params['id']){
              this.employeeId=params['id'];
            }
     });
     console.log(this.employeeId+this.employee.id);
  }
  showDetail(){
    this.throwEmployee.emit(this.employee);
    this.router.navigate(['/employee',this.employee.id]);

  }
  getImage(){
    if(this.employee.photo==null){
          return '../../../assets/default-user-image.png';
        }else{
          return this.employee.photo;
        }
  }
}
