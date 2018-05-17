import { Component, OnInit} from '@angular/core';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  heroes: Hero[];
  id: number;
  age: number;
  name: string;
  money: string;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  addHero(event) {
    console.log(event.target.value);
    this.heroes.push({
      id: 20,
      age: this.age,
      name: this.name,
      money: this.money
    });
    this.age = null;
    this.name = this.money = '';
  }
}

