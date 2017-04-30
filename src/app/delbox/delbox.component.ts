import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-delbox',
  templateUrl: './delbox.component.html',
  styleUrls: ['./delbox.component.css']
})
export class DelboxComponent implements OnInit {

  constructor(public popUp:MdDialogRef<DelboxComponent>) { }

  ngOnInit() {
  }

}
