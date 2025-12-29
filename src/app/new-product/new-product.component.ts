import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../services/product-service.service';

@Component({
  selector: 'app-new-product',
  standalone: false,
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {
  public productForm!: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductServiceService) {
  }
    ngOnInit(): void {
      this.productForm = this.fb.group({
        name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
        price: this.fb.control(0, [Validators.required, Validators.min(0)]),
      })
    }


  onSubmit() {
    if (this.productForm.valid) {
      this.productService.saveNewProduct(this.productForm.value).subscribe({
        next: () => {
          console.log("success");
        },
        error: (err) => {
          console.log(err);
        }
      })
    }else {
      console.log(this.productForm.errors);
    }
  }
}
