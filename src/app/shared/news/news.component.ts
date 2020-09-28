import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nao-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private API_KEY = "e40d07f00b094602953cc3bf8537477e";
  private API_ENDPOINT = `https://newsapi.org/v2/top-headlines?sources=svenska-dagbladet&apiKey=${this.API_KEY}`;
  data = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.API_ENDPOINT).subscribe((data) =>{
      console.log(data['articles']);
      this.data = data['articles'];
    });
  }

}