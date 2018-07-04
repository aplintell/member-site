import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MeService } from '../service/me.service';
import { Me } from '../entity/me';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  me: Me;
  
  constructor(private meService: MeService, private router: Router,private translate: TranslateService) { 
    translate.addLangs(['en', 'vn']);
    translate.setDefaultLang('vn');
    translate.use('vn');
    this.meService.me.subscribe(me => {
      this.me = me;
      console.log(this.me);
      // if(me != null && me.name == null){
      //   this.router.navigateByUrl("/login", { skipLocationChange: false });
      // }else if(me != null && me.name != null){
      //   this.router.navigateByUrl("/", { skipLocationChange: false });
      // }
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
