import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchService } from '../core/services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
  ],
  providers: [SearchService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;
  private _subscriptions = new Subscription();
  constructor() { }

  ngOnInit() {
   
  }
  toggleBurgerMenu(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
