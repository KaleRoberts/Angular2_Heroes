import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id'); // Hero id is a number, and route params are always strings. Have to do type conversion here with the + operator in front of this._routeParams
    this._heroService.getHero(id).
      then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

}