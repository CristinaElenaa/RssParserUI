import { Injectable } from '@angular/core';
import { RssItem } from '../models/rss-item';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = "News";

  constructor(private http: HttpClient) { }


  public getAllNews(url: string): Observable<RssItem[]> {
    let params =  new HttpParams();
    params = params.append('url', url);

    return this.http.get<RssItem[]>(`${environment.apiUrl}/${this.url}/${"defaultUrl"}`, {
      params: params
    });
  }

  public getSortedNews(sortOption: string): Observable<RssItem[]> {
    let params = new HttpParams();
    params = params.append('sort', sortOption);

    return this.http.get<RssItem[]>(`${environment.apiUrl}/${this.url}/${"sortNews"}`, {
      params: params
    });
  }

  public getSearchedNews(keyword: string): Observable<RssItem[]> {
    let params = new HttpParams();
    params = params.append('keyword', keyword);

    return this.http.get<RssItem[]>(`${environment.apiUrl}/${this.url}/${"search"}`, {
      params: params
    });
  }

  public saveNewsListToDb(url: string): Observable<RssItem[]> {
    let params = new HttpParams();
    params = params.append('url', url);
  
    return this.http.post<RssItem[]>(`${environment.apiUrl}/${this.url}`, null, {
      params: params
    });
  }

}

