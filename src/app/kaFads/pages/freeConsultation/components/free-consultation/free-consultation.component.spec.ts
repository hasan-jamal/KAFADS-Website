import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeConsultationComponent } from './free-consultation.component';

describe('FreeConsultationComponent', () => {
  let component: FreeConsultationComponent;
  let fixture: ComponentFixture<FreeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
