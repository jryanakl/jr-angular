import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { JrLogoComponent } from './logo.component';

describe('JrLogoComponent', () => {
  let component: JrLogoComponent;
  let fixture: ComponentFixture<JrLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        JrLogoComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrLogoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
});
