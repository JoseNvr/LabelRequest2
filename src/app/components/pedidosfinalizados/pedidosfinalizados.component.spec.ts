import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PedidosFinalizadosComponent } from './pedidosfinalizados.component';

describe('PedidosIFinalizadosComponent', () => {
  let component: PedidosFinalizadosComponent;
  let fixture: ComponentFixture<PedidosFinalizadosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosFinalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
