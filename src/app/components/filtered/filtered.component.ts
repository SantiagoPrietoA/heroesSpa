import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html'
})
export class FilteredComponent implements OnInit {

  heroeFiltered: any[];
  constructor( private activatedRout: ActivatedRoute,
               private _heroesService: HeroesService 
    ) { }

  ngOnInit() {
    this.activatedRout.params.subscribe( params => {
      this.heroeFiltered = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
