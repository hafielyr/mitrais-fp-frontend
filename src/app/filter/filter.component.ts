import { Component, OnInit,Inject } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../location.model';
import { lookupListToken } from '../providers';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private locations:Location[];
  constructor(private locationService:LocationService,
  @Inject(lookupListToken) public lookupListToken) { }

  ngOnInit() {
    this.locationService.get().subscribe(locations=>{
      this.locations=locations;
    });
  }

}
