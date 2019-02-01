import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

import { HeroService } from './hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: any[];
  heroes: any[];
  tResponse: any;
  count = 0;

constructor(private heroService: HeroService , private fb: FormBuilder ) {
}

addForm = this.fb.group({
  heroId : ['', [Validators.required, Validators.maxLength(4)]],
  heroName: ['', [Validators.required]],
  specialPower: ['', [Validators.required]],
  universe: ['', [Validators.required]],
  description: ['', [Validators.required, Validators.maxLength(50)]]
});

ngOnInit() {
  this.getHeroes();
}

getHeroes() {
      this.heroService.getHeroDetails(null)
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



countLike = (heroName) => {
  for (let k = 0 ; k < this.heroes.length; k++ ) {
    if (this.heroes[k].heroName === heroName ) {
      this.heroes[k].count++;
    }
  }
}



addHero = () => {
  const data = {
    'heroId': this.addForm.value.heroId,
    'heroName': this.addForm.value.heroName,
    'specialPower': this.addForm.value.specialPower,
    'universe': this.addForm.value.universe,
    'description': this.addForm.value.description
  };
  this.heroService.addHeroes(data)
    .then(response => {
      this.tResponse = response.message;
    }).catch(error => this.tResponse = error.message);
    this.addForm.reset();
}


}
