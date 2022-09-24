import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrintGroupMicroServicesComponent } from './print-group-micro-services.component';

describe('PrintGroupMicroServicesComponent', () => {
  let component: PrintGroupMicroServicesComponent;
  let fixture: ComponentFixture<PrintGroupMicroServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintGroupMicroServicesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintGroupMicroServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
