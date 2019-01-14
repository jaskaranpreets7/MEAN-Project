import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { log } from 'util';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: any[] ;
  public id: string;

  constructor(  private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
    this.getHeroes();
  }

  ngOnInit(): void {
  }

  getHeroes(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroes(this.id)
      .then( res => {
        this.hero = res;
          for ( let i = 0 ; i < this.hero.length ; i++) {
            if ( this.hero[i].heroId === Number(this.id)) {
              this.hero = this.hero[i];
              return this.hero;
            }
          }
        },
        error => {
          alert( 'ERROR' );
        }
      );
  }



  goBack(): void {
    this.location.back();
  }

}
