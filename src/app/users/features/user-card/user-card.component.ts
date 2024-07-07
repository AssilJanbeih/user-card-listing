import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GetUser } from '../../models/get-user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: GetUser;
  @Input() isLoading: boolean = true;
  @Input() isProfile: boolean = false;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  repeat(): number[] {
    var n = this.isProfile ? 1 : 4
    return Array(n);
  }

  // navigates to user
  public navigate(user: any): void {
    this.router.navigate(['/profile', user.id]);
  }

}
