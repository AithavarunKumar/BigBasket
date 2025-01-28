import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // makes the service available globally
})
export class ProductApiService {
  private products = [
    {
      id: 1,
      name:'MeatsAndFishes',
      img: '/images/MeatsAndFishes.webp',
      category: 'dairy-products',
      price: 45,

    },
    {
      id: 2,
      name:'breads',
      img: '/images/breads.webp',
      category: 'dairy-products',
      price: 52,
    },
    {
      id: 3,
      name:'AtaAndRice',
      img: '/images/AtaAndRice.webp',
      category: 'dairy-products',
      price: 37,
    },
    {
      id: 4,
      name:'BreakFastAndSnacks',
      img: '/images/BreakFastAndSnacks.webp',
      category: 'dairy-products',
      price: 61,
    },
    {
      id: 5,
      name:'PackedFoods',
      img: '/images/PackedFoods.webp',
      category: 'vegetables',
      price: 79,
    },
    {
      id: 6,
      name:'AtaAndRice',
      img: '/images/AtaAndRice.webp',
      category: 'vegetables',
      price: 34,
    },
    {
      id: 7,
      name:'BreakFastAndSnacks',
      img: '/images/BreakFastAndSnacks.webp',
      category: 'vegetables',
      price: 53,
    },
    {
      id: 8,
      name:'PackedFoods',
      img: '/images/PackedFoods.webp',
      category: 'beverages',
      price: 48,
    },
    {
      id: 9,
      name:'MeatsAndFishes',
      img: '/images/MeatsAndFishes.webp',
      category: 'beverages',
      price: 65,
    },
    {
      id: 10,
      name:'breads',
      img: '/images/breads.webp',
      category: 'beverages',
      price: 41,
    },
    {
      id: 11,
      name:'AtaAndRice',
      img: '/images/AtaAndRice.webp',
      category: 'beverages',
      price: 59,
    },
    {
      id: 12,
      name:'BreakFastAndSnacks',
      img: '/images/BreakFastAndSnacks.webp',
      category: 'beverages',
      price: 72,
    },
    {
      id: 13,
      name:'PackedFoods',
      img: '/images/PackedFoods.webp',
      category: 'beverages',
      price: 88,
    },
    {
      id: 14,
      name:'beatuy',
      img: '/images/beatuy.webp',
      category: 'beverages',
      price: 90,
    },
    {
      id: 15,
      name:'sweetswebp',
      img: '/images/sweetswebp.webp',
      category: 'beverages',
      price: 50,
    },
    {
      id: 16,
      name:'skincare',
      img: '/images/skincare.webp',
      category: 'beverages',
      price: 77,
    },
    {
      id: 17,
      name:'MeatsAndFishes',
      img: '/images/MeatsAndFishes.webp',
      category: 'vegetables',
      price: 44,
    },
    {
      id: 18,
      name:'breads',
      img: '/images/breads.webp',
      category: 'vegetables',
      price: 30,
    },
    {
      id: 19,
      name:'AtaAndRice',
      img: '/images/AtaAndRice.webp',
      category: 'vegetables',
      price: 62,
    },
    {
      id: 20,
      name:'BreakFastAndSnacks',
      img: '/images/BreakFastAndSnacks.webp',
      category: 'vegetables',
      price: 39,
    },
    {
      id: 21,
      name:'PackedFoods',
      img: '/images/PackedFoods.webp',
      category: 'vegetables',
      price: 81,
    },
    {
      id: 22,
      name:'beatuy',
      img: '/images/beatuy.webp',
      category: 'vegetables',
      price: 58,
    },
    {
      id: 23,
      name:'sweetswebp',
      img: '/images/sweetswebp.webp',
      category: 'vegetables',
      price: 74,
    },
    {
      id: 24,
      name:'skincare',
      img: '/images/skincare.webp',
      category: 'vegetables',
      price: 46,
    },
    {
      id: 25,
      name:'MeatsAndFishes',
      img: '/images/MeatsAndFishes.webp',
      category: 'beverages',
      price: 85,
    },
    {
      id: 26,
      name:'beatuy',
      img: '/images/beatuy.webp',
      category: 'beverages',
      price: 63,
    },
    {
      id: 27,
      name:'breads',
      img: '/images/breads.webp',
      category: 'beverages',
      price: 54,
    },
    {
      id: 28,
      name:'AtaAndRice',
      img: '/images/AtaAndRice.webp',
      category: 'beverages',
      price: 68,
    },
    {
      id: 29,
      name:'BreakFastAndSnacks',
      img: '/images/BreakFastAndSnacks.webp',
      category: 'beverages',
      price: 47,
    },
    {
      id: 30,
      name:'PackedFoods',
      img: '/images/PackedFoods.webp',
      category: 'beverages',
      price: 49,
    },
    {
      id: 31,
      name:'sweetswebp',
      img: '/images/sweetswebp.webp',
      category: 'beverages',
      price: 38,
    },
    {
      id: 32,
      name:'skincare',
      img: '/images/skincare.webp',
      category: 'beverages',
      price: 92,
    },
  ];

   // Return products as an observable
   getAllProducts() {
    return of(this.products);  // Use of() to return an observable
  }

  // Filter products by category and return as observable
  getProductsByCategory(category: string) {
    const filteredProducts = this.products.filter((product) => product.category === category);
    return of(filteredProducts);  // Return an observable of filtered products
  }

  // Filter products by name and return as observable with a delay
  getProductsByName(searchTerm: string) {
    const filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filteredProducts).pipe(delay(1000)); // Simulate a delay for the request
  }
  
}
