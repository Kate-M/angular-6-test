import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 4));
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero.name);
  }
  
}