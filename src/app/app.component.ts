import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Numbers';
  array = [1,2,3,4,5,6];
  people: any[] = [
    {'name': 'A', 'age': '20'},
    {'name': 'B', 'age': '25'},
    {'name': 'C', 'age': '21'},
    {'name': 'D', 'age': '22'}
  ]
}  
