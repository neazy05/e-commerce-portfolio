
import {Injectable, Injector} from '@angular/core';
import {AuthServiceService} from "./auth-service.service";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService  implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authService = this.injector.get(AuthServiceService);
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenReq);
  }

}
