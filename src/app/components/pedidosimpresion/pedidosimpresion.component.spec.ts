import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PedidosImpresionComponent } from './pedidosimpresion.component';

describe('PedidosImpresionComponent', () => {
  let component: PedidosImpresionComponent;
  let fixture: ComponentFixture<PedidosImpresionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosImpresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
