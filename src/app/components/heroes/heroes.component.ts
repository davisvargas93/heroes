import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  loading = true;
  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes()
    .subscribe( data => {
      this.heroes = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }
  borraHeroe( key$: string) {

    this._heroesService.borrarHeroe(key$)
        .subscribe( respuesta => {
          if ( respuesta ) {
            console.error(respuesta);
          } else {
            // todo bien
            delete this.heroes[key$];
          }
        } );

  }
}
