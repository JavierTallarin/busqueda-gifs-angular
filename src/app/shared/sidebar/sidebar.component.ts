import { Component, OnInit } from '@angular/core';
import { GifsModule } from 'src/app/gifs/gifs.module';
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


}
