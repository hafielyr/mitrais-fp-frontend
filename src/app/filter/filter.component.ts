import { Component, OnInit,Inject } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../location.model';
import { lookupListToken } from '../providers';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private locations:Location[];
  gender = "";
  location = "";
  constructor(private locationService:LocationService,
  @Inject(lookupListToken) public lookupListToken,
  public filterdialog:MdDialogRef<FilterComponent>) { }

  ngOnInit() {
    this.locationService.get().subscribe(locations=>{
      this.locations=locations;
    });
  }

  filterGender(gender){
      this.gender=gender;
  }

  filterLocation(locid){
    this.location=locid;
  }
}
