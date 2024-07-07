import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetUser, GetUserInfo, GetUserList } from '../models/get-user';
import { environment } from '../../../enviroment/environment';

@Injectable() // service provided in User module
export class UserService {
    //User Api
    private _baseUrl = `${environment.backendBaseUrl}`;
    constructor(private httpClient: HttpClient) { }

    // get user info
    public getUser(userId: string): Observable<GetUserInfo> {
        const userUrl: string = `${this._baseUrl}/${userId}`;
        return this.httpClient.get<GetUserInfo>(userUrl, {});
    }

    // get user info
    public getUsers(page: number): Observable<GetUserList> {
        const userUrl: string = `${this._baseUrl}?page=${page}`;
        return this.httpClient.get<GetUserList>(userUrl, {});
    }

   
}
