import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

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
