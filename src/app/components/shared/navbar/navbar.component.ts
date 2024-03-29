import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string, $event) {
    $event.preventDefault();
    this.router.navigate( ['/filtered', termino] );
  }

}
