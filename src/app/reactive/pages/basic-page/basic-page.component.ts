import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const rtx5090 = {
  name: 'RTX-5090',
  price: 2500,
  inStorage:7

}

@Component({
  standalone: false,
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit{
  

  
  //Una forma de declarar un formulario reactivo
  /*   public myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  }); */

  //Otra forma de declarar el formulario reactivo
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      price: [0,[Validators.required, Validators.min(0)]],
      inStorage: [0,[Validators.required,Validators.min(0)]],
    });
  }
  ngOnInit(): void {
    // Initialize any necessary data or perform any required setup
    this.myForm.reset(rtx5090);
    console.log('BasicPageComponent initialized');
  }

  onSave():void{
    if(this.myForm.invalid) return;
    console.log(this.myForm.value);

    this.myForm.reset({price:0, inStorage:0});
  }
}
