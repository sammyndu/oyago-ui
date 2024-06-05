import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupDriveChoiceComponent } from './signup-drive-choice.component';

describe('SignupDriveChoiceComponent', () => {
  let component: SignupDriveChoiceComponent;
  let fixture: ComponentFixture<SignupDriveChoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDriveChoiceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupDriveChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
