import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { tap,catchError } from "rxjs/operators"
import { Stories } from "../model/stories.model";
import { Comments } from "../model/comments.model";


@Injectable({
    providedIn:'root'
})

export class StoriesService{

    constructor(
        private http: HttpClient
    )
    {}
    
    FetchTopStories(data):Observable<Stories[]>
    {
        return this.http.get<Stories[]>(`${environment.apis.nysServer}/topstories/v2/${data}.json?api-key=${environment.key}`)
    }
    FetchComments(data):Observable<Comments[]>
    {
        return this.http.get<Comments[]>(`${environment.apis.nysServer}/community/v3/user-content/url.json?api-key=${environment.key}&offset=10&url=${data}` )
    }
    SearchStories(data):Observable<Stories[]>
    {
        return this.http.get<Stories[]>(`${environment.apis.nysServer}/search/v2/articlesearch.json?q=${data.searchTerm}&api-key=${environment.key}&page=${data.page}` )
    }

    

}
