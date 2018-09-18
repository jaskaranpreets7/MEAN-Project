import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: any ;
  public id: string;

  constructor(  private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
    // this.getHero();
  }

  ngOnInit(): void {
  }
  // getHero(): void {
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(this.id)
  //     .subscribe((res: any) => {this.hero = res },
  //     error => {
  //       alert("ERROR");
  //     });
  //     console.log('why '+ this.hero);
  //     console.log("id " + this.id)
  //     // console.log("hero-details", this.hero)
  // }

  goBack(): void {
    this.location.back();
  }

}
