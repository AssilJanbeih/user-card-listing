import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetUser } from '../../models/get-user';
import { SearchService } from '../../../core/services/search.service';
import { HeaderComponent } from '../../../header/header.component';
import { ImageWithButtonModule } from '../../../shared/ui/image-with-button/image-with-button.module';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../../data-access/user.service';

@Component({
  selector: 'app-users-listing',
  standalone: true,
  imports: [
    CommonModule,
    ImageWithButtonModule,
    UserCardComponent,
    HeaderComponent,
  ],
  providers: [UserService, SearchService],
  templateUrl: './users-listing.component.html',
  styleUrl: './users-listing.component.scss'
})
export class UsersListingComponent {

  public usersList: GetUser[] = [];

  noResultFound = true;
  isSearching = false;
  isLoading: boolean = true;

  //Pagination
  totalUsers: number = 0;
  totalPages: number = 1;
  totalUsersInPage: number = 0;
  currentPage = 1;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   const search = params['keyword'];
    //   if (search) {
    //     this.isSearching = true;
        
    //   }
    // });
    this.startLoadingTimer();
    this.listUsers();

  }

  async startLoadingTimer(): Promise<void> {
    this.isLoading = true;
    await setTimeout(() => {
     this.isLoading = false;
    }, 10000); 
  }

  listUsers() {
    this.isSearching = this.route.snapshot.paramMap.has('keyword')!;
    if (this.isSearching) {
      this.handleUserSearch();
    }
    else {
      this.getUserPerPage(this.currentPage);
    }
  }

  handleUserSearch() {
    // this.userService.getUsers(this.currentPage).subscribe((data => {
    //   this.usersList = data.data;

    // }))
    this.isLoading = true;
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!
    this.searchService.getSearchForUsers(keyword).subscribe((data: any) => {
      this.usersList = data.users.items;
      // if (this.usersList.length === 0) {
      //   this.noResultFound = true;
      // }
      // else {
      //   this.noResultFound = false;
      // }

    }, (err) => {
      console.error(err.message);
    }, () => {
    });
  }

  getUserPerPage(page: number) {
    this.currentPage = page;
    this.userService.getUsers(page).subscribe((data => {
      this.usersList = data.data;
      this.totalPages = data.total_pages;
      this.totalUsers = data.total;
      this.totalUsersInPage = data.per_page;
      if (this.usersList) {
        this.noResultFound = false;
        this.isLoading = false;
      }
    }));
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getUserPerPage(this.currentPage);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getUserPerPage(this.currentPage);
    }
  }
}
