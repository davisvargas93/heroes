import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class HeroesService {

  heroesURL = 'https://heroesapp-5c71d.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-5c71d.firebaseio.com/heroes/';

  constructor( private _http: Http, private http: HttpClient) { }

  nuevoHeroe( heroe: Heroe ) {

    const body = JSON.stringify( heroe );
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(  this.heroesURL, body, { headers }  )
      .pipe( map ( res => {
              console.log(res);
              return res.toString;
          }));
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {

    const body = JSON.stringify( heroe );
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put(  url , body, { headers }  ).pipe(
          map( res => {
            console.log(res);
            return res;
          }));
  }

  getHeroe( key$: string ) {

    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url )
        .pipe(map( res => JSON.parse(JSON.stringify(res))));

  }

  getHeroes( ) {

    return this.http.get( this.heroesURL )
            .pipe(map( res => JSON.parse(JSON.stringify(res))));

  }

  borrarHeroe( key$: string) {

    const url = `${  this.heroeURL  }/${ key$ }.json`;
    return this.http.delete( url )
            .pipe(map( res => res));

  }


}
