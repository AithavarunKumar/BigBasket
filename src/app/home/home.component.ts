import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { Subject } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CartItemsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName:string='varun'
  searchTerm: string = ''; 
  showModal = false;
  showCartModal = false;
  toastMessage: string | null = null;
  cartLength: string | null = null;
  isLoading: boolean = false;
  results: any[] = [];
  Products: any[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(private ProductApiService: ProductApiService) {
    this.searchSubject
      .pipe(
        switchMap((term: string) =>
          this.ProductApiService.getProductsByName(term).pipe(
            catchError(() => {
              this.isLoading = false;
              alert('Error fetching data');
              return of([]); // Return an empty array on error
            })
          )
        )
      )
      .subscribe((data) => {
        this.results = data;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.loadAllProducts(); // Load all products on initialization
  }

  onSearchInputChange(): void {
    if (this.searchTerm.trim()) {
      this.isLoading = true;
      this.searchSubject.next(this.searchTerm);
    } else {
      this.results = []; // Clear search results if search term is empty
    }
  }

  loadAllProducts(): void {
    this.ProductApiService.getAllProducts().subscribe(
      (products) => {
        this.Products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  loadProductsByCategory(category: string): void {
    this.isLoading = true;
    this.ProductApiService.getProductsByCategory(category).subscribe(
      (products) => {
        this.Products = products;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching products by category:', error);
        this.isLoading = false;
      }
    );
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  toggleCartModal(): void {
    this.showCartModal = !this.showCartModal;
  }

  handleRegistrationSuccess(message: string): void {
    this.toastMessage = message;
    setTimeout(() => {
      this.toastMessage = null;
    }, 2000);
  }
}
