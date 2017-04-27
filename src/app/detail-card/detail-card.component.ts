import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeService} from '../employee.service';
import { ReloadpageService} from '../reloadpage.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  employee=null;
  show=false;
  employeeId;
  constructor(
        private router:Router,
        private activatedRoute:ActivatedRoute,
        private employeeService:EmployeeService,
        private reloadpageService:ReloadpageService
    ){}
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(
     params=>{
       this.employeeId=params['id'];
            this.getEmployee(this.employeeId);
     });
  }
  getEmployee(id){
    this.employeeService.getEmployee(this.employeeId).subscribe(employe=>{
      this.employee=employe;
      if(this.employee==null){
        this.show=false;
      }
      else{
        this.show=true;
      }
    });
  }
  deleteEmployee(id){
    
    this.employeeService.delete(this.employeeId).subscribe(employee=>{  
      this.reloadpageService.notifyOther({ option: 'delete', value: 'delete' });
      this.employeeService.get();
      this.router.navigate(['/add']);
      //window.location.reload();
    });
    
  }
}
