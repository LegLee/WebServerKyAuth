import {Injectable} from '@angular/core';
import {User} from '../interfaces';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})

export class sendMsgService{


  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  sendMsgTg(mesege: any){
    console.log('SERVICE '+ mesege.msg + ' TokenVK '+ mesege.tokenVK + ' TokenTg ' + mesege.tokenTg + ' chatIdTG ' + mesege.chatIdTg)
    return this.http.post('/api/sendMsg', mesege)
  }
}
