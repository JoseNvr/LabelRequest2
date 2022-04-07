import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PedidosEsperaComponent } from './pedidosespera.component';

describe('PedidosEsperaComponent', () => {
  let component: PedidosEsperaComponent;
  let fixture: ComponentFixture<PedidosEsperaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
