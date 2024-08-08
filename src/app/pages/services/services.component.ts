import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  form: any;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
      console.log("texto")

      this.form = this.fb.group({
        asunto: ['', Validators.required] ,
        nombre: ['', Validators.required] ,
        correo: ['', Validators.compose([Validators.required, Validators.email])] ,
        celular: ['', Validators.compose([Validators.required, Validators.minLength(10)])] 
      })
  }

  submit() {
    console.log("envie el formulario", this.form.value)
  }

}
