import {Injectable} from 'angular2/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
        heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 1500) // Will resolve after 1.5 seconds. Simulate a server response time
    );  // We should aspire to make some loading spinner when waiting on server requests.
  }
}