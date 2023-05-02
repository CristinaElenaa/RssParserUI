import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RssParserUI';

  displayNews = false;
  displaySortField = false;
  displaySearchField = false;
  saveToDb = false;
  
  displaySortedNews = false;
  displaySearchedNews = false;

  userInput!: string;
  userOption!: string;
  options = [
    { label: 'Ascending  by title', value: 'titleasc' },
    { label: 'Descending  by title', value: 'titledesc' },
    { label: 'Ascending  by date', value: 'dateasc' },
    { label: 'Descending  by date', value: 'datedesc' }
  ];

 selectedOption: string;



  constructor(){
    this.selectedOption = "titleasc";
  }
 
  ngOnInit(): void{
    
  }

  onSelectionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    this.selectedOption = value;
    console.log(this.selectedOption);
  }

  changeDisplayNews(){
     this.displayNews = true;
     this.displaySortField = false;
     this.displaySearchField = false;
     this.saveToDb = false;

     this.userOption = "displayUnfilteredNews";
  }

  changeDisplaySortedNews(){
    this.displaySortField = true;
    this.displayNews = false;
    this.displaySearchField = false;
    this.saveToDb = false;

    this.userOption = "displaySortedNews";
 }

 changeShowSearchedNews(){
    this.displaySearchField = true;
    this.displaySortField = false;
    this.displayNews = false;
    this.saveToDb = false;
    
    this.userOption = "displaySearchedNews";
  }

  saveNewsToDb(){
    this.saveToDb = true;
    this.displaySearchField = false;
    this.displaySortField = false;
    this.displayNews = false;

    this.userOption = "saveNewsToDb";
  }

  
  onSubmitDisplaySortedNews() {
    this.displaySortedNews = true;
  }

  onSubmitDisplaySearchedNews(){
    this.displaySearchedNews = true;
  }

}
