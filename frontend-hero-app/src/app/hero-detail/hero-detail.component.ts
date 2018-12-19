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

  @Input() hero: any[] ;
  public id: string;

  constructor(  private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
    this.getHeroes();
  }

  ngOnInit(): void {
  }
  getHeroes(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroes(this.id)
      .then((res: any) => {this.hero = res;
      },
      error => {
        alert('ERROR');
      });
  }
  

  goBack(): void {
    this.location.back();
  }

}
