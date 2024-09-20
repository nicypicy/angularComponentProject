import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SearchComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
temp  :any = [];
products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 49.99,
      inStock: "Available",
      image: "/products/wirelessbuds.jpg",
      description: "High-quality wireless earbuds with noise-cancellation and long battery life.",
      showDescription: false
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      category: "Clothing",
      price: 19.99,
      inStock: "Available",
      image: "/products/tshirt.jpeg",
      description: "Soft and breathable organic cotton t-shirt available in various colors.",
      showDescription: false
    },
    {
      id: 3,
      name: "4K Ultra HD Smart TV",
      category: "Electronics",
      price: 699.99,
      inStock: "Available",
      image: "/products/tv.jpg",
      description: "55-inch 4K Ultra HD Smart TV with built-in streaming apps and voice control.",
      showDescription: false
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      category: "Accessories",
      price: 24.99,
      inStock: "Out of Stock",
      image: "/products/bottle.webp",
      description: "Durable stainless steel water bottle with vacuum insulation for keeping drinks cold or hot.",
      showDescription: false
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 89.99,
      inStock: "Available",
      image: "/products/speaker.webp",
      description: "Portable Bluetooth speaker with high-fidelity sound and long battery life.",
      showDescription: false
    },
    {
      id: 6,
      name: "Leather Wallet",
      category: "Accessories",
      price: 39.99,
      inStock: "Out of Stock",
      image: "/products/wallet.jpg",
      description: "Elegant leather wallet with multiple card slots and a coin compartment.",
      showDescription: false
    }
  ];

  
searchValue: String = '';

get filteredProducts() {
  if (!this.searchValue) {
    return this.products;
  }
  const searchLower = this.searchValue.toLowerCase();
  const filtered = this.products.filter(item => 
    item.name.toLowerCase().includes(searchLower) ||
    item.category.toLowerCase().includes(searchLower) ||
    item.price.toString().includes(searchLower)
  )
  return filtered;
}

toggleDescription(product: any){
  product.showDescription = !product.showDescription;
}
}
  


