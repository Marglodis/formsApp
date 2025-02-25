import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//En lugar de hacer esta importacion por cada función que se requiere se hace una importación de todo el archivo
//import { canBeStrider, emailPattern } from '../../../shared/validators/validators';

import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  standalone: false,
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emmailValidator: EmailValidator

  ) {
    this.myForm = this.fb.group({
      name:['',[Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
      email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[this.emmailValidator]],
      //email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[new EmailValidator()]],
      username:['',[Validators.required, this.validatorsService.canBeStrider]],
      password:['',[Validators.required, Validators.minLength(6)]],
      password2:['',[Validators.required]],
    });
    
  }

  isValidField(field: string){
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
