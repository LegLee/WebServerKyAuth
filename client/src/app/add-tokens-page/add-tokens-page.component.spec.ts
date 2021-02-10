import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTokensPageComponent } from './add-tokens-page.component';

describe('AddTokensPageComponent', () => {
  let component: AddTokensPageComponent;
  let fixture: ComponentFixture<AddTokensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTokensPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTokensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
