import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

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
