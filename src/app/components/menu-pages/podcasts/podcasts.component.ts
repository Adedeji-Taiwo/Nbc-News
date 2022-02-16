import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     $("svg.icon").click(function() {
      $("p.pages-mobile" ).toggleClass( "open");
    });

       
   $(".active").click(function() {
      $("p.pages-mobile" ).toggleClass( "close");
    });
  }

}
