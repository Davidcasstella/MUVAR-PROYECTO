import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PATRONES } from './constantes';

/**
 * Validadores personalizados para formularios reactivos
 */

/**
 * Validador de contraseña fuerte
 */
export const passwordFuerte: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.value;

  if (!password) {
    return null;
  }

  if (!PATRONES.PASSWORD.test(password)) {
    return {
      passwordFuerte: true,
      mensaje: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial'
    };
  }

  return null;
};

/**
 * Validador de coincidencia de passwords
 */
export const passwordsCoinciden = (
  campoPassword: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.root.get(campoPassword)?.value;
    const confirmarPassword = control.value;

    if (!password || !confirmarPassword) {
      return null;
    }

    return password === confirmarPassword
      ? null
      : {
          passwordsNoCoinciden: true,
          mensaje: 'Las contraseñas no coinciden'
        };
  };
};

/**
 * Validador de URL
 */
export const urlValida: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const url = control.value;

  if (!url) {
    return null;
  }

  if (!PATRONES.URL.test(url)) {
    return {
      urlInvalida: true,
      mensaje: 'Formato de URL inválido'
    };
  }

  return null;
};

/**
 * Validador de teléfono
 */
export const telefonoValido: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const telefono = control.value;

  if (!telefono) {
    return null;
  }

  if (!PATRONES.TELEFONO.test(telefono)) {
    return {
      telefonoInvalido: true,
      mensaje: 'Formato de teléfono inválido'
    };
  }

  return null;
};
