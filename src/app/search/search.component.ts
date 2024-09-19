import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchValue = 'Varsha';
changeSearchValue(eventdata: Event){
  this.searchValue = (<HTMLInputElement>eventdata.target).value;
}

  
}
