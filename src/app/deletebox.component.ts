import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
@Component({
  selector: 'app-delete-box',
  templateUrl: './deletebox.component.html',
  styleUrls: ['./deletebox.component.css']
})
export class DeleteboxComponent implements OnInit{
    constructor(public popUp:MdDialogRef<DeleteboxComponent>) { }

    ngOnInit() {
  }
}
