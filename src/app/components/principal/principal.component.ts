import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  @ViewChild('modalCharg') charging: ModalDirective;
  @ViewChild('modalConfirm') confirm: ModalDirective;
  public serial_number: string;
  public part_number: string;
  public reference1: string;
  public RevList = [];

  constructor() { }

  ngOnInit() {
    console.log(this.serial_number);
    
    for(var i = 0 ; i < 10 ; i++)
    this.RevList.push(i);
  }
  eventHandler(event) {
    if (event.keyCode == 13) {
      console.log("you are sen someting");
      

    }
  }

}
