import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReimpresionComponent } from './reimpresion.component';

describe('ReimpresionComponent', () => {
  let component: ReimpresionComponent;
  let fixture: ComponentFixture<ReimpresionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReimpresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
