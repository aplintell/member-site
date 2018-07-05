import { CategoryService } from './../service/category.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '../service/global.service';
import { LoginService } from '../service/login.service';
import { CustomerService } from '../service/customer.service';
import { PostBidProductComponent } from './post-bid-product/post-bid-product.component';
import { GlobalErrorHandler } from '../error/global-error-handler';
import { HomeBranchesComponent } from './home/home-branches/home-branches.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { BannersComponent } from './home/banners/banners.component';
import { NearlyExpireBidProductsComponent } from './home/nearly-expire-bid-products/nearly-expire-bid-products.component';
import { VipBidProductsComponent } from './home/vip-bid-products/vip-bid-products.component';
import { NewBidProductsComponent } from './home/new-bid-products/new-bid-products.component';
import { SuccessBidProductsComponent } from './home/success-bid-products/success-bid-products.component';
import { HeaderAreaComponent } from './common-component/header-area/header-area.component';
import { FooterAreaComponent } from './common-component/footer-area/footer-area.component';
import { ServiceListComponent } from './common-component/service-list/service-list.component';
import { BiddingProductService } from '../service/bidding-product.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderAreaComponent,
    FooterAreaComponent,
    ServiceListComponent,
    HomeBranchesComponent,
    CategoriesComponent,
    BannersComponent,
    NearlyExpireBidProductsComponent,
    VipBidProductsComponent,
    NewBidProductsComponent,
    SuccessBidProductsComponent,
    PostBidProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'post-bid-product',
        component: PostBidProductComponent
      }
      
    ])
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    },
    GlobalService,
    LoginService,
    CustomerService,
    CategoryService,
    BiddingProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

