import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlmacenamientoServicio } from '@nucleo/servicios';

interface AccesoFormulario {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent {
  constructor(
    private readonly router: Router,
    private readonly almacenamientoSvc: AlmacenamientoServicio
  ) {}

  formulario = new FormGroup<AccesoFormulario>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  cargando = false;
  mostrarPassword = false;

  iniciarSesion(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.cargando = true;

    // TODO: Implementar llamada real a API
    setTimeout(() => {
      // Simulación de autenticación exitosa
      this.almacenamientoSvc.guardarToken('token-simulado');
      this.router.navigate(['/app/dashboard']);
    }, 1000);
  }

  alternarPassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }
}
