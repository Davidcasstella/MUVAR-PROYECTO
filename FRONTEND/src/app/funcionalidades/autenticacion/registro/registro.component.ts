import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface RegistroFormulario {
  nombre: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmarPassword: FormControl<string>;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  constructor(private readonly router: Router) {}

  formulario = new FormGroup<RegistroFormulario>({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    }),
    confirmarPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  cargando = false;

  registrarse(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const password = this.formulario.value.password;
    const confirmarPassword = this.formulario.value.confirmarPassword;

    if (password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.cargando = true;

    // TODO: Implementar llamada real a API
    setTimeout(() => {
      alert('Registro exitoso. Por favor inicia sesión.');
      this.router.navigate(['/acceso']);
    }, 1000);
  }
}
