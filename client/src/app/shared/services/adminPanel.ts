import {Injectable} from '@angular/core';
import {Message, User, UserForAdmin} from '../interfaces';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class adminPanel{


  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  adminPanel(): Observable<UserForAdmin[]>{
    return this.http.get<UserForAdmin[]>('/api/getAllUsers');
  }

  removeUser(id: string): Observable<Message>{
    console.log(`api/removeUser/${id}`)
    const url = `api/removeUser/${id}`
    return this.http.delete<Message>(`api/removeUser/${id}`);
  }
}
