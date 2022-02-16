import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

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
