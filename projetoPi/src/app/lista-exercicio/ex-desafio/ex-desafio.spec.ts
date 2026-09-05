import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDesafio } from './ex-desafio';

describe('ExDesafio', () => {
  let component: ExDesafio;
  let fixture: ComponentFixture<ExDesafio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExDesafio],
    }).compileComponents();

    fixture = TestBed.createComponent(ExDesafio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
