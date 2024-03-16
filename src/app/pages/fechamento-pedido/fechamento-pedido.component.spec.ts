import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoPedidoComponent } from './fechamento-pedido.component';

describe('FechamentoPedidoComponent', () => {
  let component: FechamentoPedidoComponent;
  let fixture: ComponentFixture<FechamentoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechamentoPedidoComponent]
    });
    fixture = TestBed.createComponent(FechamentoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
