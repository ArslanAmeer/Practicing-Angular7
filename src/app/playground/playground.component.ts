import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  sectionSelected = 'section2';
  numbers = [1, 2, 3, 4, 5, 6];
  even = [2, 4, 6];
  odd = [1, 3, 5];
  isEven = false;
  value = 10;
  constructor() {}

  ngOnInit() {}

  onSectionClick(section: string) {
    this.sectionSelected = section;
  }
}
