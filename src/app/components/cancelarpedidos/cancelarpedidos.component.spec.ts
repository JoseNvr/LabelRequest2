import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CancelarPedidosComponent } from './cancelarpedidos.component';

describe('CancelarPedidosComponent', () => {
  let component: CancelarPedidosComponent;
  let fixture: ComponentFixture<CancelarPedidosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CancelarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});