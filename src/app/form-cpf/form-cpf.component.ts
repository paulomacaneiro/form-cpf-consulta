import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-cpf',
  templateUrl: './form-cpf.component.html',
  styleUrls: ['./form-cpf.component.sass']
})
export class FormCpfComponent implements OnInit {

// use formbuilder to generate a form  wih a form field called cpf
  cpfField = new FormControl(``,[]);

  constructor() { }

  ngOnInit(): void {
  }

}
