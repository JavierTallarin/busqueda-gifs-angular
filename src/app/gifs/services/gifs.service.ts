import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})//le dice a angular que el servicio estara disponible de manera unica
export class GifsService {
  private _historial: string[] = [];
  
  constructor() { }

  get historial(){
    
    return [...this._historial];

  }

  buscarGifs( query: string){
    

    if (! this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
    }
    console.log(this._historial);
    
  }
}
