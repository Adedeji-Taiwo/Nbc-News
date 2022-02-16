import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aside-news',
  templateUrl: './aside-news.component.html',
  styleUrls: ['./aside-news.component.css']
})
export class AsideNewsComponent implements OnInit, OnDestroy {
  liveNews: any = [];
  sortLiveNews: any = [];
  allLiveNews?: Subscription;
  live: string = "Live";
  location: string = "Location News";
  label: string = "Get Location Specific News";
  
  constructor(private _topLiveServ: ApiService) { }

  ngOnInit(): void {
    this.allLiveNews = this._topLiveServ.wallNews().subscribe(result => {
      this.liveNews = result.articles;
      this.sortLiveNews = (this.liveNews)[Math.floor(Math.random() * (this.liveNews).length)];

    });
  }

  

  onClickSubmit(data: { locationId: string; }) {
    alert("Entered data is :" + data.locationId)
  }
  
  ngOnDestroy(): void {
    this.allLiveNews?.unsubscribe
  }
}