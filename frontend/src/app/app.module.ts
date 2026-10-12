import { AdminAssignDelivererComponent } from './components/admin-assign-deliverer/admin-assign-deliverer.component';
import { MyFavortComponent } from './components/my-favort/my-favort.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesService } from './services/categories.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDeductMoneyComponent } from './components/admin-deduct-money/admin-deduct-money.component';
import { AdminGenerateCodesComponent } from './components/admin-generate-codes/admin-generate-codes.component';
import { AdminNonDeliveredOrdersComponent } from './components/admin-non-delivered-orders/admin-non-delivered-orders.component';
import { AdminOrdersWithoutDeliveryComponent } from './components/admin-orders-without-delivery/admin-orders-without-delivery.component';
import { AdminOrderRecordComponent } from './components/admin-order-record/admin-order-record.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorServiceService } from "./services/token-interceptor-service.service";
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CommonModule, DatePipe } from "@angular/common";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NgxModule } from './ngx/ngx/ngx.module';
import { FilesModule } from './files/files/files.module';
import { AdminAllOrdersComponent } from './components/admin-all-orders/admin-all-orders.component';
import { NonDeliveredOrdersComponent } from './components/non-delivered-orders/non-delivered-orders.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { ViewAllCategoriesComponent } from './components/view-all-categories/view-all-categories.component';
import { ViewSingleProductComponent } from './components/view-single-product/view-single-product.component';
import { ViewSingleCategoryComponent } from './components/view-single-category/view-single-category.component';
import { ViewProductsByMarketComponent } from './components/view-products-by-market/view-products-by-market.component';
import { UserAllOrdersComponent } from './components/user-all-orders/user-all-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';
import { DeliveryAllOrdersComponent } from './components/delivery-all-orders/delivery-all-orders.component';
import { ApplyCouponComponent } from './components/apply-coupon/apply-coupon.component';
import { ViewOrdersByMarketComponent } from './components/view-orders-by-market/view-orders-by-market.component';
import { ViewMarketProductsComponent } from './components/view-market-products/view-market-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { GeneratedCouponsComponent } from './components/generated-coupons/generated-coupons.component';
import {SignUpOwnerComponent} from './components/sign-up-owner/sign-up-owner.component';
import {SharedService} from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminAllOrdersComponent,
    AdminOrdersWithoutDeliveryComponent,
    AdminNonDeliveredOrdersComponent,
    AdminGenerateCodesComponent,
    AdminDeductMoneyComponent,
    AddProductComponent,
    FooterComponent,
    CarouselComponent,
    CategoryComponent,
    TopProductsComponent,
    HomePageComponent,
    EditprofileComponent,
    ViewAllProductsComponent,
    ViewAllCategoriesComponent,
    ViewSingleProductComponent,
    ViewSingleCategoryComponent,
    ViewProductsByMarketComponent,
    MyFavortComponent,
    UserAllOrdersComponent,
    CartComponent,
    OrderDetailsComponent,
    PageLoadingComponent,
    DeliveryAllOrdersComponent,
    ApplyCouponComponent,
    ViewOrdersByMarketComponent,
    ViewMarketProductsComponent,
    EditProductComponent,
    AdminAssignDelivererComponent,
    GeneratedCouponsComponent,
    SignUpOwnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxModule,
    FilesModule,
  ],
  exports: [
    FooterComponent,
    CarouselComponent,
    CategoryComponent,
    TopProductsComponent,
    CartComponent,
    AdminAssignDelivererComponent
  ],
  providers: [OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorServiceService,
      multi: true,

    },
    DatePipe,
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
