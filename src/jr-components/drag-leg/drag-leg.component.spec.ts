import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { JrDragLegItemsComponent } from './drag-leg-items.component';
import { JrDragLegComponent } from './drag-leg.component';
import { JrDragLegService } from './drag-leg.service';
import { IDragLegPane } from './models';

describe('JrDragLegComponent', () => {
  let component: JrDragLegComponent;
  let fixture: ComponentFixture<JrDragLegComponent>;
  let legendService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        JrDragLegComponent,
        JrDragLegItemsComponent,
      ],
      providers: [
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrDragLegComponent);
    component = fixture.componentInstance;
    legendService = fixture.debugElement.injector.get(JrDragLegService);

    fixture.detectChanges();
  });

  describe('LEGEND CONFIG', () => {
    let compiled;
    const legendPanes: Array<IDragLegPane> = [
      {
        name: 'Model',
        items: [
          {
            label: 'JavaScript',
            icon: 'javascript',
          },
        ],
      },
      {
        name: 'View',
        items: [
          {
            label: 'HTML',
            icon: 'html',
          },
        ],
      },
    ];
    let paneItemElements: any;
    let tabElements: any;

    beforeEach(() => {
      component.panes = legendPanes;
      fixture.detectChanges();
      component.ngOnInit();
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;

      paneItemElements = compiled.querySelectorAll('.jr-drag-leg__item');
      tabElements = compiled.querySelectorAll('.nav-tabs li a');
    });

    it('it shall render tab name values, as well as the pane item labels', () => {
      expect(tabElements[0].textContent).toContain('Model');
      expect(tabElements[1].textContent).toContain('View');
    });
  });
});
