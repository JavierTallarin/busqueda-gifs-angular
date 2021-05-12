import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService) { }

  obtenerHistorial(): string[]{
    return this.gifsService.historial;
  }
  
  buscar(nombre: string): void{
    console.log('desde sidebar '+nombre);
    
    this.gifsService.buscarGifsF(nombre);

  }


}
