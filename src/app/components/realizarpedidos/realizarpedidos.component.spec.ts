import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RealizarPedidosComponent } from './realizarpedidos.component';

describe('RealizarPedidosComponent', () => {
  let component: RealizarPedidosComponent;
  let fixture: ComponentFixture<RealizarPedidosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RealizarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});