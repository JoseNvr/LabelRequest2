import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AtenderPedidosComponent } from './atenderpedidos.component';

describe('AtenderPedidosComponent', () => {
  let component: AtenderPedidosComponent;
  let fixture: ComponentFixture<AtenderPedidosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AtenderPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
