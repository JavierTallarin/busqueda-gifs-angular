import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})//le dice a angular que el servicio estara disponible de manera unica
export class GifsService {
  private _historial: string[] = [];
  private _apikey: string = '42zPwsXqYogLseZu5CzPuYTWMhCsamSQ';
  private _base_url: string = 'https://api.giphy.com/v1/gifs'
  private _limit: number = 10;
  public resultados: Gif[] = [];

  constructor(private  http: HttpClient) { 
    
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }
    this._historial = JSON.parse( localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];
  }

  get historial(){
    
    return [...this._historial];

  }

  buscarGifsF(query: string=''){
    console.log('log de buscarGifsF');
    
    query = query.trim().toLocaleLowerCase();
    if (! this._historial.includes(query)){
      this._historial.unshift( query);
      this._historial = this._historial.splice(0,10); //manter un historial de 10 elementos      
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }
    const params = new HttpParams()
          .set('api_key', this._apikey)
          .set('limit', this._limit.toString())
          .set('q', query);
    
    console.log(params.toString());
    
         
    this.http.get<SearchGifsResponse>(`${this._base_url}/search`, {params})
    .subscribe( ( resp ) => {
      console.log(resp.data);
      this.resultados = resp.data; //se visualizara desde resultados.component
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
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
