import {Injectable} from '@angular/core';
import {User} from '../interfaces';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class authService{

  private token: any
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  login(user: User): Observable<{ token: string }>{
    return this.http.post<{ token: string }>('/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  // tslint:disable-next-line:typedef
  setToken(token: any){
    this.token = token
  }



  getToken(): any{
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  // tslint:disable-next-line:typedef
  logout(){
    this.setToken(null)
    localStorage.clear()
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('/api/auth/register', user)
  }

}
