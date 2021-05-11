import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})//le dice a angular que el servicio estara disponible de manera unica
export class GifsService {
  private _historial: string[] = [];
  private _apikey: string = '42zPwsXqYogLseZu5CzPuYTWMhCsamSQ';
  private _base_url: string = 'https://api.giphy.com/v1/gifs/search?api_key='
  public resultados: any[] = [];

  constructor(private  http: HttpClient) { }

  get historial(){
    
    return [...this._historial];

  }

  buscarGifsF(query: string=''){
    console.log('log de buscarGifsF');
    
    query = query.trim().toLocaleLowerCase();
    if (! this._historial.includes(query)){
      this._historial.unshift( query);
      this._historial = this._historial.splice(0,10); //manter un historial de 10 elementos      
    }

    this.http.get(`${this._base_url}${this._apikey}&limit=10&q=${query}`)
    .subscribe( (resp: any) => {
      console.log(resp.data);
      this.resultados = resp.data; //se visualizara desde resultados.component
      
    })




  }

  async buscarGifs( query: string){
    

    if (! this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
    }
    console.log(this._historial);

    // console.log(this._base_url+query);
    
    const resp = await fetch(`${this._base_url}${this._apikey}&limit=10&q=${query}`);
    const data = await resp.json();
    console.log(data.data);
    

    
  }

}
