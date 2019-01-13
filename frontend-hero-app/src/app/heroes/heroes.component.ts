import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: any[];
  heroes: any[];
  count = 0;

constructor(private heroService: HeroService) {
  this.getHeroes();
}

ngOnInit() {
}

getHeroes() {
      this.heroService.getHeroes(null)
          .then( res => {
            this.heroes = res;
            for (let i = 0 ; i < this.heroes.length; i++) {
              this.hero = this.heroes[i];
               Object.assign(this.hero, {count: this.count});
              }
          },
          error => {
            alert( 'ERROR' );
          });
}



countLike(heroName) {
  for (let k = 0 ; k < this.heroes.length; k++ ) {
    if (this.heroes[k].heroName === heroName ) {
      this.heroes[k].count++;
    }
  }

}


}
