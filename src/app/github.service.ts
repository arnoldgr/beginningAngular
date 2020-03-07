import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitHubService{
    constructor(private _http: HttpClient){

    }

    getGitHubData(_searchTerm: string){
        return this._http.get("https://api.github.com/search/users?q=" + _searchTerm)
            .pipe( map((res: { json: () => any; }) => res.json()))
    }
}
