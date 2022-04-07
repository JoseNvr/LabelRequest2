import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PedidosProcesoComponent } from './pedidosproceso.component';

describe('PedidosProcesoComponent', () => {
  let component: PedidosProcesoComponent;
  let fixture: ComponentFixture<PedidosProcesoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
