import { Component } from '@angular/core';

import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CRUD de Angular';
  msg:string = '';
  empleados = [
    { 
      'nombre': 'Carlos Sierra',
      'cargo': 'Programador',
      'email': 'carlos.sierra@gmail.com'
    },
    { 
      'nombre': 'Vicky Marin',
      'cargo': 'Maquetador',
      'email': 'vicky.marin@gmail.com'
    },
    { 
      'nombre': 'Gemma Bataller',
      'cargo': 'Cuentas',
      'email': 'gemma.bataller@gmail.com'
    },
    { 
      'nombre': 'Leandro Sierra',
      'cargo': 'Programador',
      'email': 'leandro.sierra@gmail.com'
    }
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmpleado():void {
    this.empleados.push(this.model);
    this.msg = 'campo agregado';
    
    // $("#nombre").val("");
    // $("#cargo").val("");
    // $("#email").val("");
  }

  deleteEmpleado(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.empleados.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmpleado(i):void {
    this.hideUpdate = false;
    this.model2.nombre = this.empleados[i].nombre;
    this.model2.cargo = this.empleados[i].cargo;
    this.model2.email = this.empleados[i].email;
    this.myValue = i;
  }

  updateEmpleado():void {
    let i = this.myValue;
    for(let j = 0; j < this.empleados.length; j++){
      if(i == j) {
        this.empleados[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }
}