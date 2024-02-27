import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html',
    styleUrl: './product-form.component.css'
})

export class ProductFormComponent implements OnInit {
    productForm!: FormGroup;
    ngOnInit() {
      this.productForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      });
    }
    onSubmit() {
      if (this.productForm.valid) {
        console.log(this.productForm.value);
      }
    }
    
}