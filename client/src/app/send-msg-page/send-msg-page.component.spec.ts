import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMsgPageComponent } from './send-msg-page.component';

describe('SendMsgPageComponent', () => {
  let component: SendMsgPageComponent;
  let fixture: ComponentFixture<SendMsgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMsgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMsgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
