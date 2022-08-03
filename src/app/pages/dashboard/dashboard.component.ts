import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  miFormulario!: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', [ Validators.required] ],
      email: ['', [ Validators.required, Validators.email] ],
      empresa: ['', [ Validators.required] ],
      pais: ['', [] ],
      telefono: ['', [] ],
      mensaje: ['', [Validators.required] ],
    });
  }

  enviarFormulario() {
    if( this.miFormulario.invalid ){
      
      this.miFormulario.markAllAsTouched();
      alert('Formulario no enviado')

    } else {
      console.log(this.miFormulario.value);
      alert('Formulario enviado')

    }

  }
  validarCampos( campo: any) {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched
  }

}
