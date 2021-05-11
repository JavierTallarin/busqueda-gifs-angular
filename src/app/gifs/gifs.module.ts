import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [GifsPageComponent]
})
export class GifsModule { }
