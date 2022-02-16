import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

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
