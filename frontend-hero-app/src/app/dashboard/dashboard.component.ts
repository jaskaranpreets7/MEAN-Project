import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

heroes: any[] ;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
   this.heroService.getHeroes(null)
      .then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
