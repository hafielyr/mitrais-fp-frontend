import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent  {
  
  @Input() employee;
  @Output() throwEmployee = new EventEmitter();
  
  constructor(
    private router: Router){}
  showDetail(){
    this.throwEmployee.emit(this.employee);
    this.router.navigate(['/employee',this.employee.id]);

  }
}
