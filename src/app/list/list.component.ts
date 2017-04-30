import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ReloadpageService} from '../reloadpage.service';
import { Subscription } from 'rxjs/Subscription';
import { Router,ActivatedRoute } from '@angular/router';
import { DelboxComponent} from '../delbox/delbox.component';
import { FilterComponent} from '../filter/filter.component';
import {MdToolbarModule, MdDialog} from '@angular/material';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  medium = '';
  private employees:Employee[];
  private subscription: Subscription;
  private selectedEmployee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private reloadpageService: ReloadpageService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private deldialog: MdDialog,
    private filterdialog:MdDialog
    ) {}  

  ngOnInit() {
    this.selectedEmployee=null;
    this.getMediaItems();
    this.subscription=this.reloadpageService.notifyObservable$.subscribe(res=>{
      if(res.option=='delete'){
      this.getMediaItems();}
      else if(res.option=='updateList'){
      this.getMediaItems();
      this.selectedEmployee=null;
    }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getEmployee(employee) {
    this.selectedEmployee=employee;
  }

  getMediaItems() {
    this.employeeService.get()
      .subscribe(employees => {
        this.reloadpageService.notifyOther({ option: 'add', value: 'add' });
        this.employees = employees;
      });
  }
  onDelete(){
    let open = this.deldialog.open(DelboxComponent);
    open.afterClosed().subscribe(result=>{
      if(result.action=="yes"){
          this.employeeService.delete(this.selectedEmployee.id).subscribe(employee=>{  
      this.reloadpageService.notifyOther({ option: 'delete', value: 'delete' });
      this.employeeService.get();
      this.selectedEmployee=null;
      this.router.navigate(['/add']);
      //window.location.reload();
    });
      }
    });
    
  }
  onFilter(){
    this.filterdialog.open(FilterComponent);
  }
  addEmployee(){
    this.selectedEmployee=null;
    this.router.navigate(['/add']);
  }
  sortAsc(){
    this.employeeService.sortasc().subscribe(employees=>this.employees=employees);
  }
  sortDesc(){
    this.employeeService.sortdesc().subscribe(employees=>this.employees=employees);
  }
  onSearch(parameter){
    this.employeeService.getEmployeesBySearchParameter(parameter).subscribe(employees=>{
      this.employees=employees;
    });
  }
}
