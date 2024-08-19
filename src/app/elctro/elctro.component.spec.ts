import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElctroComponent } from './elctro.component';

describe('ElctroComponent', () => {
  let component: ElctroComponent;
  let fixture: ComponentFixture<ElctroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElctroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElctroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
