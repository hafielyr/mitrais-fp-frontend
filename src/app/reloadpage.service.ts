import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject} from 'rxjs/Rx'
import {Employee} from 'app/employee.model';

@Injectable()
export class ReloadpageService {
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();

  constructor() { }
  public notifyOther(data: any) {
        if (data) {
            this.notify.next(data);
        }
    }
}
