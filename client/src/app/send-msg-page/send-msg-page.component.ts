import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {sendMsgService} from "../shared/services/sendMsg.service";
import {MaterialService} from "../shared/classes/material.service";
import {authService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-send-msg-page',
  templateUrl: './send-msg-page.component.html',
  styleUrls: ['./send-msg-page.component.css']
})
export class SendMsgPageComponent implements OnInit {

  form: FormGroup
  sSub: Subscription | undefined;

  constructor(private sender: sendMsgService) {
    this.form = new FormGroup({
      messageToSend: new FormControl(null, [Validators.required]),
      tokenVK: new FormControl(null, [Validators.required]),
      chatIdTg: new FormControl(null, [Validators.required]),
      tokenTg: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    const msgJson = {
      msg: this.form.value.messageToSend,
      tokenVK: this.form.value.tokenVK,
      chatIdTg: this.form.value.chatIdTg,
      tokenTg: this.form.value.tokenTg
    }
    this.sSub = this.sender.sendMsgTg(msgJson).subscribe(
      () =>{
        MaterialService.toast(this.form.value.messageToSend)
      },
      error => {
        MaterialService.toast(error.error.message)
        console.warn(error);
      }
    )
  }

}
