import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css']
})
export class HeaderAreaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  initLoginPage(){
    this.router.navigateByUrl("/login", { skipLocationChange: false });
  }
}
