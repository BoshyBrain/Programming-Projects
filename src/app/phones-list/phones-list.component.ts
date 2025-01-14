import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {
  phones: Phone[] = [{ id: 1, producer: "Samsung", name: "Galaxy", model: "S23" },
  { id: 2, producer: "Apple", name: "iPhone", model: "14" },
  { id: 3, producer: "Xiaomi", name: "Poco", model: "F4" }];

  selectedPhone?: Phone;

  constructor() { }

  ngOnInit(): void {
  }

  phoneSelected(p: Phone) {
    this.selectedPhone = p;
  }

}
