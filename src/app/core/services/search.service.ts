import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment/environment';
import { GetUser } from '../../users/models/get-user';

@Injectable() // service provided in module
export class SearchService {
    //Search Api
    private _baseUrl = `${environment.backendBaseUrl}`;

    constructor(private http: HttpClient) { }

    // get both tracks and artist from spotify
    public getSearchForUsers(id: string): Observable<GetUser> {
        const searchUrl: string = `${this._baseUrl}/${id}`;
       console.log(searchUrl , "url")
        return this.http.get<GetUser>(searchUrl);

    }
    
}
