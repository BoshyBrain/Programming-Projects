import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../phone';

@Component({
  selector: 'app-current-phone',
  templateUrl: './current-phone.component.html',
  styleUrls: ['./current-phone.component.css']
})
export class CurrentPhoneComponent implements OnInit {
  @Input() currentPhone?: Phone/*= {id:1,producer: ' Samsung ',name:'S ' ,model: ' 23 '}*/;
 
  constructor() { }

  ngOnInit(): void {
  }

}
