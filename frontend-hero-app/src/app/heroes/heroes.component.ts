import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: any[];

  constructor(private heroService: HeroService) {

      this.heroService.getHeroes(null)
          .then( (res => this.hero = res),
          error => {
            alert( 'ERROR' );
          });
  }

giveLike(){
  alert('You liked our Heroes ' )
}


  ngOnInit() {
  }

}
