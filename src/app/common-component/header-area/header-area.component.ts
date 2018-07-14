import { MeService } from './../../../service/me.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Me } from '../../../entity/me';

@Component({
  selector: 'header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css']
})
export class HeaderAreaComponent implements OnInit {

  me: Me;

  constructor(private router: Router, private meService: MeService) {
    this.meService.me.subscribe(me => {
      this.me = me;
    });
   }

  ngOnInit() {
  }

}
