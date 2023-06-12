import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Arreglo inicial de alimnos que usa el modelo de alumno
  alumnosArray: Alumno[] = [
    { id: 1, nombre: 'Miguel', grado: '5', edad: 21 },
    { id: 2, nombre: 'Paulina', grado: '1', edad: 20 },
    { id: 3, nombre: 'Jose', grado: '3', edad: 21 },
    { id: 4, nombre: 'Sergio', grado: '4', edad: 21 },
  ];

  // Inicializamos el alumno seleccionado como una instacia del modelo alumno
  selectedAlumno: Alumno = new Alumno();

  // Para agregar o editar tenemos los mismos campos entonces usaremos un mismo metodo
  addOrEdit() {
    // Revisamos el id del alumno seleccionado al hacer click, en caso de ser 0 significa que tenemos un nuevo alumno
    if (this.selectedAlumno.id === 0) {
      // Aumentamos el num de id y agregamos el alumno a la lista
      this.selectedAlumno.id = this.alumnosArray.length + 1;
      this.alumnosArray.push(this.selectedAlumno);
    }
    // Volvemos a hacer que la variable de selectedAlumno sea una instancia vacia de Alumno
    this.selectedAlumno = new Alumno();
  }

  // Al hacer click en un alumno vamos a hacer que selectedAlumno tome la info de dicho alumno
  openForEdit(alumnito: Alumno) {
    this.selectedAlumno = alumnito;
  }

  // Para borrar solamente haecmos que nos mande un confirm y hacemos filter de la lista para que remover dicho alumno
  delete() {
    if (
      confirm('¿Estás seguro que quieres eliminar el registro seleccionado?')
    ) {
      this.alumnosArray = this.alumnosArray.filter(
        (x) => x != this.selectedAlumno
      );
      this.selectedAlumno = new Alumno();
    }
  }
}
