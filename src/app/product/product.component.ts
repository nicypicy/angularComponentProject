import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 49.99,
      inStock: "Available",
      image: "/products/wirelessbuds.jpg",
      description: "High-quality wireless earbuds with noise-cancellation and long battery life."
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      category: "Clothing",
      price: 19.99,
      inStock: "Available",
      image: "/products/tshirt.jpeg",
      description: "Soft and breathable organic cotton t-shirt available in various colors."
    },
    {
      id: 3,
      name: "4K Ultra HD Smart TV",
      category: "Electronics",
      price: 699.99,
      inStock: "Available",
      image: "/products/tv.jpg",
      description: "55-inch 4K Ultra HD Smart TV with built-in streaming apps and voice control."
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      category: "Accessories",
      price: 24.99,
      inStock: "Out of Stock",
      image: "/products/bottle.webp",
      description: "Durable stainless steel water bottle with vacuum insulation for keeping drinks cold or hot."
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 89.99,
      inStock: "Available",
      image: "/products/speaker.webp",
      description: "Portable Bluetooth speaker with high-fidelity sound and long battery life."
    },
    {
      id: 6,
      name: "Leather Wallet",
      category: "Accessories",
      price: 39.99,
      inStock: "Out of Stock",
      image: "/products/wallet.jpg",
      description: "Elegant leather wallet with multiple card slots and a coin compartment."
    }
  ];

}
