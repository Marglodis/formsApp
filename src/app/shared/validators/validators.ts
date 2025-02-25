import { FormControl, ValidationErrors } from "@angular/forms";

//Valida que el campo tenga dos palabras (Nombre y Apellido)
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

//Valida el patrón de un email
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const canBeStrider = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();
   
    if (value === 'strider') {
        return {
            noStrider: true,
        }
    }
 return null;
}