import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { GetUser } from '../../models/get-user';
import { HeaderComponent } from '../../../header/header.component';
import { UserService } from '../../data-access/user.service';
import { ImageWithButtonModule } from '../../../shared/ui/image-with-button/image-with-button.module';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ImageWithButtonModule,
    UserCardComponent
  ],
  providers: [UserService],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();
  user!: GetUser;
  userId!: string;
  isLoading: boolean = true;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.userId = id;
      this.getUserInfo(id);
    }
  }

  getUserInfo(id: string) {
    this.userService.getUser(id).subscribe(data => {
      this.user = data.data;
      this.isLoading= false;
    })
  }

  public navigateList(): void {
    this.router.navigate(['/users']);
  }
  
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
