import { Component, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchValue = '';

  @Output() searchValueChange = new EventEmitter<string>();

changeSearchValue(eventdata: Event){
  this.searchValue = (<HTMLInputElement>eventdata.target).value;
  this.searchValueChange.emit(this.searchValue);
}

  
}
