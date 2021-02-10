import {Component, OnInit} from '@angular/core';
import {adminPanel} from "../shared/services/adminPanel";
import {UserForAdmin} from "../shared/interfaces";
import {FormControl, FormGroup} from "@angular/forms";
import {MaterialService} from "../shared/classes/material.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {

  loading = false
  users: UserForAdmin[] = []

  constructor(private adminPanelService: adminPanel,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true
    // @ts-ignore
    this.adminPanelService.adminPanel().subscribe(users =>{
      this.loading = false
      this.users = users
      // @ts-ignore
      console.log('Users', users)
    })
  }

  deleteUser(user: any): void{
    const decision = window.confirm(`R u sure to delete ` + user.email + `?`)
    if(decision){
      console.log('USER ID = '+user._id)
      this.adminPanelService.removeUser(user._id).subscribe(
        response => MaterialService.toast(response.message),
        error => MaterialService.toast(error.error.message),
        () => window.location.reload()
      )
    }
  }

}
