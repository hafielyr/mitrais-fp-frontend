import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ReloadpageService} from '../reloadpage.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  medium = '';
  private employees:Employee[];
  private subscription: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private reloadpageService: ReloadpageService
    ) {}  

  ngOnInit() {
    this.getMediaItems();
    this.subscription=this.reloadpageService.notifyObservable$.subscribe(res=>{
      
    });
  }
  onMediaItemDelete(mediaItem) {
    this.employeeService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems();
      });
  }

  getMediaItems() {
    this.employeeService.get()
      .subscribe(employees => {
        this.reloadpageService.notifyOther({ option: 'add', value: 'add' });
        this.employees = employees;
      });
  }
}
