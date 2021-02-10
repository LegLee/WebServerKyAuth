import {Component, OnInit} from '@angular/core';
import {authService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {


  links = [
    {url: '/sendMsg', name: 'Рассылка'},
    {url: '/adminPanel', name: 'Пользователи'}
    ]

  linksUser = [
    {url: '/sendMsg', name: 'Рассылка'},
  ]

  constructor(private auth: authService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(event: Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }
}
