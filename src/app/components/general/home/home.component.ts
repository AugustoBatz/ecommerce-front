import { Component, OnInit } from '@angular/core';
import lozad from 'lozad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }

}
