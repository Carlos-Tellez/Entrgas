import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  forma! : FormGroup;

constructor(private fb :FormBuilder){

  this.crearFormulario();

}


get nombreNoValido (){
  return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
}

get apellidoNoValido (){
  return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
}

get correoNoValido (){
  return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
}

crearFormulario(){

  this.forma = this.fb.group({

    nombre : ['', [Validators.required, Validators.minLength(4)]],
    apellido : ['', Validators.required],
    correo : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]

  })
}

guardar(){

  console.log(this.forma);

  if (this.forma.invalid){
    return Object.values(this.forma.controls).forEach(control =>{
      control.markAllAsTouched();
    })
  }

}

limpiar(){
  this.forma.reset();
}



}
