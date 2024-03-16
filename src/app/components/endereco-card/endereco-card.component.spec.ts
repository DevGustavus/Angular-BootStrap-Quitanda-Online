import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoCardComponent } from './endereco-card.component';

describe('EnderecoCardComponent', () => {
  let component: EnderecoCardComponent;
  let fixture: ComponentFixture<EnderecoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecoCardComponent]
    });
    fixture = TestBed.createComponent(EnderecoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
