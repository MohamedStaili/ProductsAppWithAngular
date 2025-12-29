import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../services/product-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductModel} from '../../model/product.model';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  public productId!: number;
  public formGroup!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductServiceService,
              private fb: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
     this.productService.getProductById(this.productId).subscribe({
      next: (data)=>{
        let product: ProductModel = data;
        this.formGroup = this.fb.group({
          id: product.id,
          name: this.fb.control(product.name, [Validators.required, Validators.minLength(2)]),
          price: this.fb.control(product.price, [Validators.required, Validators.min(2)]),
        })

      },
      error: (err)=>{
        console.log(err);
      }
    });


  }

  onSubmit() {
    if(this.formGroup.valid){
      let product: ProductModel = this.formGroup.value;
      this.productService.updateProduct(product).subscribe({
        next: (data)=>{
          alert(JSON.stringify(data));

        },
        error: (err)=>{
          console.log(err);
        }
      })
    }

  }
}
