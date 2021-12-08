/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToComponent } from './to.component';

describe('ToComponent', () => {
  let component: ToComponent;
  let fixture: ComponentFixture<ToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});