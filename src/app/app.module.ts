import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComentarioComponent,
    NavbarComponent,
    ListComentariosComponent,
    VerComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
