import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoAccordionComponent } from './pedido-accordion.component';

describe('PedidoAccordionComponent', () => {
  let component: PedidoAccordionComponent;
  let fixture: ComponentFixture<PedidoAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoAccordionComponent]
    });
    fixture = TestBed.createComponent(PedidoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
