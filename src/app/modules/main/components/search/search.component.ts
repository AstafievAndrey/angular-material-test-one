import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;
  @Output('search') searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.search) {
      this.searchEvent.emit(this.search);
    }
  }

}
