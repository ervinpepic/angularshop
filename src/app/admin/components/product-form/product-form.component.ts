import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router/';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getAllCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.getOneProduct(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product) {
    if(this.id) this.productService.updateProduct(this.id, product);

    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Delete this product?')) return;

    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit() {
  }

}
