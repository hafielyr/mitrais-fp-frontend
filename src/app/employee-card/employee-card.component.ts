import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent  {
  
  @Input() employee;
  @Output() delete = new EventEmitter();
  
  constructor(
    private router: Router){}
  onDelete() {
    this.delete.emit(this.employee);
  }
  showDetail(){
    this.router.navigate(['/detail',this.employee.id]);
  }
}
