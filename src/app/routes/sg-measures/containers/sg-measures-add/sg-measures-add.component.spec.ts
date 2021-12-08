/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SgMeasuresAddComponent } from './sg-measures-add.component';

describe('SgMeasuresAddComponent', () => {
  let component: SgMeasuresAddComponent;
  let fixture: ComponentFixture<SgMeasuresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgMeasuresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgMeasuresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
