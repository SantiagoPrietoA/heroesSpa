import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',
  styleUrls: ['./heroe-target.component.css']
})
export class HeroeTargetComponent implements OnInit {

  @Input() heroe: any[];
  @Input() i: number;

  constructor() { }

  ngOnInit() {
  }

}
