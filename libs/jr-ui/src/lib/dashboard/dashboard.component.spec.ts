import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { JrDashboardComponent } from './dashboard.component';

describe('JrDashboardComponent', () => {
  let component: JrDashboardComponent;
  let fixture: ComponentFixture<JrDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        JrDashboardComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrDashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
});
