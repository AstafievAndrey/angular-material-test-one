import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;
  @Input() btnText = 'поиск';
  @Output('onSubmit') submitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitEvent.emit(this.search);
  }

}
