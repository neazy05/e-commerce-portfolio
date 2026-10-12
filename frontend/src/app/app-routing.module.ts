import { GeneratedCouponsComponent } from './components/generated-coupons/generated-coupons.component';
import { AdminAssignDelivererComponent } from './components/admin-assign-deliverer/admin-assign-deliverer.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewMarketProductsComponent } from './components/view-market-products/view-market-products.component';
import { ViewOrdersByMarketComponent } from './components/view-orders-by-market/view-orders-by-market.component';
import { DeliveryAllOrdersComponent } from './components/delivery-all-orders/delivery-all-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { UserAllOrdersComponent } from './components/user-all-orders/user-all-orders.component';
import { MyFavortComponent } from './components/my-favort/my-favort.component';
import { ViewProductsByMarketComponent } from './components/view-products-by-market/view-products-by-market.component';
import { ViewSingleCategoryComponent } from './components/view-single-category/view-single-category.component';
import { ViewSingleProductComponent } from './components/view-single-product/view-single-product.component';
import { ViewAllCategoriesComponent } from './components/view-all-categories/view-all-categories.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminAllOrdersComponent } from './components/admin-all-orders/admin-all-orders.component';
import { AdminDeductMoneyComponent } from './components/admin-deduct-money/admin-deduct-money.component';
import { AdminGenerateCodesComponent } from './components/admin-generate-codes/admin-generate-codes.component';
import { AdminNonDeliveredOrdersComponent } from './components/admin-non-delivered-orders/admin-non-delivered-orders.component';
import { AdminOrdersWithoutDeliveryComponent } from './components/admin-orders-without-delivery/admin-orders-without-delivery.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpDeliveryComponent } from './components/sign-up-delivery/sign-up-delivery.component';
import { SignUpOwnerComponent } from './components/sign-up-owner/sign-up-owner.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { ProfileResolverService } from "./resolver/profile-resolver.service";
import { ApplyCouponComponent } from './components/apply-coupon/apply-coupon.component';

const routes: Routes = [
  {
    path: "", component: RegisterComponent
  },
  {
    path: "editprofile", component: EditprofileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AdminAuthGuard]
  },
  { path: "signup", component: SignUpComponent },
  { path: "contactus", component: ContactUsComponent },
  { path: "cart", component: CartComponent },
  { path: "signupDelivery", component: SignUpDeliveryComponent },
  { path: "signupOwner", component: SignUpOwnerComponent },
  { path: "history", component: HistoryComponent },
  { path: "profile", component: ProfileComponent },
  { path: "admin/all-orders", component: AdminAllOrdersComponent },
  { path: "admin/non-delivered-orders", component: AdminNonDeliveredOrdersComponent },
  { path: "admin/orders-without-delivery", component: AdminOrdersWithoutDeliveryComponent },
  { path: "admin/generate-codes", component: AdminGenerateCodesComponent },
  { path: "admin/deduct-money", component: AdminDeductMoneyComponent },
  { path: "admin/generated-coupons", component: GeneratedCouponsComponent },
  { path: "admin/assign-deliverer", component: AdminAssignDelivererComponent },


  { path: "addproduct", component: AddProductComponent },

  { path: "allproducts", component: ViewAllProductsComponent },
  { path: "allcategories", component: ViewAllCategoriesComponent },
  { path: "allorders", component: UserAllOrdersComponent },
  { path: "product/:id", component: ViewSingleProductComponent },
  { path: "category/:id", component: ViewSingleCategoryComponent },
  { path: "market/:id", component: ViewProductsByMarketComponent },
  { path: "myfavorite", component: MyFavortComponent },
  { path: "orderDetails/:id", component: OrderDetailsComponent },

  { path: "delivery/assignedDeliveries", component: DeliveryAllOrdersComponent },
  { path: "applycoupon", component: ApplyCouponComponent },
  { path: "orders/market", component: ViewOrdersByMarketComponent },
  { path: "products/market", component: ViewMarketProductsComponent },
  { path: "product/edit/:id", component: EditProductComponent },


  { path: "registration", component: SignUpOwnerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
