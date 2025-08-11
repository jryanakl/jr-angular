import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { JrNavbarComponent } from './navbar.component';

describe('JrNavbarComponent', () => {
  let component: JrNavbarComponent;
  let fixture: ComponentFixture<JrNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        JrNavbarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrNavbarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
});
