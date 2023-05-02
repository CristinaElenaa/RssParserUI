import { Component, Input, OnInit } from '@angular/core';
import { RssItem } from 'src/app/models/rss-item';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  newsList: RssItem[] = [];
  @Input() userOption!: string;
  @Input() sortOption!: string;
  @Input() keyword!: string;
  @Input() selectedOption!: string;
  private readonly defaultUrl = 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    switch (this.userOption) {
      case 'displayUnfilteredNews':
        this.displayAllNews(this.defaultUrl);
        break;
      case 'displaySortedNews':
        this.displaySortedNews(this.selectedOption);
        break;
      case 'displaySearchedNews':
        this.displaySearchedNews(this.keyword);
        break;
      case 'saveNewsToDb':
        this.saveNewsToDb(this.defaultUrl);
        break;
      default:
        this.displayAllNews(this.defaultUrl);
    }
    
  }

  public displayAllNews(url: string): void{
    this.newsService
    .getAllNews(this.defaultUrl)
    .subscribe((result: RssItem[]) => (this.newsList = result));
    console.log(this.newsList);
  }

  public displaySortedNews(sortOption: string): void{
    this.newsService.getSortedNews(sortOption)
    .subscribe((result: RssItem[]) => (this.newsList = result));
    console.log(this.newsList);
  }

  public displaySearchedNews(keyword: string): void{
    this.newsService.getSearchedNews(keyword)
    .subscribe((result: RssItem[]) => (this.newsList = result));
    console.log(this.newsList);
  }

  public saveNewsToDb(url: string): void{
    this.newsService.saveNewsListToDb(this.defaultUrl)
    .subscribe((result: RssItem[]) => (this.newsList = result));
    console.log(this.newsList);
  }

}
