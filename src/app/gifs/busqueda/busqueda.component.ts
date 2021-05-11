import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  
  @ViewChild('txtBuscar') //busca una referencia local de un #txtBuscar
  txtBuscar!:ElementRef<HTMLInputElement>; //non null assertion operator

  constructor( private gifsService: GifsService){}

  buscar() {
    console.log(this.txtBuscar);
    const value = this.txtBuscar.nativeElement.value;

    if( value.trim().length != 0)
      this.gifsService.buscarGifsF(value);
    else
      console.log('no se puede insertar');
    
    this.txtBuscar.nativeElement.value='';
  
  }
  


}
