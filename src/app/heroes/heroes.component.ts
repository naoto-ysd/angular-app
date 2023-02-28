import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the component class so you can import it elsewhere … like in the AppModule.
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hero = 'Windstorm';

}
