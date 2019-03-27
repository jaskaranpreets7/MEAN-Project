import { Component, OnInit } from '@angular/core';

import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

heroes: any[] ;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
   this.heroService.getHeroDetails(null)
      .then((heroes) => {
        this.heroes = heroes;
      });
  }



  sortByName = (heroes) => {
    if (this.heroes.length > 0) {
      this.heroes.sort((a, b) => {
        const val1 = a.heroName;
        const val2 = b.heroName;
        return val1 === val2 ? 0 : val1 > val2 ? 1 : -1 ;
      });
    }
    return this.heroes;
  }
  sortById = (heroes) => {
    if (this.heroes.length > 0) {
      this.heroes.sort((a, b) => {
        const val1 = a.heroId;
        const val2 = b.heroId;
        return val1 === val2 ? 0 : val1 > val2 ? 1 : -1 ;
      });
    }
    return this.heroes;
  }

  ngOnInit() {
    this.getHeroes();
  }
}
