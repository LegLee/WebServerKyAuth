import {Injectable} from "@angular/core";
import {authService} from "../services/auth.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {MaterialService} from "./material.service";

@Injectable()

export class TokenInterceptor implements HttpInterceptor{
  constructor(private auth: authService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuthenticated()){
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      })
    }
    return next.handle(req).pipe(
      catchError(
        (error: HttpErrorResponse) => this.handleAuthError(error)
      )
    )
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any>{
    if(error.status === 401){
      MaterialService.toast('U have no access!')
      this.router.navigate(['/sendMsg'])
    }

    return throwError(error)
  }
}
