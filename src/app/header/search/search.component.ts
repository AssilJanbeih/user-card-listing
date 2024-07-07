import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  constructor(private router: Router, private searchService: SearchService) { }

  doSearch(value: string): void {
    this.searchService.getSearchForUsers(value);
    this.router.navigate(['/profile', value]);
  }
}