import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  comentarios: FormGroup;
  idComentario = 0;
  accion = 'Agregar';
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.comentarios = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    });
    if (+this.route.snapshot.paramMap.get('id') > 0){
      this.idComentario = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.esEditar();
  }

  esEditar(){
    if (this.idComentario === 1){
      this.accion = 'Editar';
      this.comentarios.patchValue({
        titulo: 'Gladiador',
        creador: 'Tomas',
        texto: 'Ganó un oscar en el 2000'
      });
    }
    else{
      if (this.idComentario === 2){
        this.accion = 'Editar';
        this.comentarios.patchValue({
          titulo: 'Rapido y Furioso',
          creador: 'Marcelo',
          texto: 'No Ganó Oscar'
        });
      }
    }
  }

  guardarComentario(){
    console.log(this.comentarios);
  }

}
