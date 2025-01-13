import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKafadsComponent } from './home-kafads.component';

describe('HomeKafadsComponent', () => {
  let component: HomeKafadsComponent;
  let fixture: ComponentFixture<HomeKafadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeKafadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeKafadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
