import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-items',
  imports: [CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

 
  closeCartModal(): void {
    this.close.emit(); 
  }
}
