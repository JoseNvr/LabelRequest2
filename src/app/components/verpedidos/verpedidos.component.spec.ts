import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerPedidosComponent } from './verpedidos.component'

describe('VerPedidosComponent', () => {
  let component: VerPedidosComponent;
  let fixture: ComponentFixture<VerPedidosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VerPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});