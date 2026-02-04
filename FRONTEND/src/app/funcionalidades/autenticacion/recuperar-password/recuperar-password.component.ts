import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface RecuperarPasswordFormulario {
  email: FormControl<string>;
}

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './recuperar-password.component.html'
})
export class RecuperarPasswordComponent {
  constructor(public readonly router: Router) {}

  formulario = new FormGroup<RecuperarPasswordFormulario>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    })
  });

  enviado = false;

  enviar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    // TODO: Implementar llamada real a API
    this.enviado = true;
  }
}
