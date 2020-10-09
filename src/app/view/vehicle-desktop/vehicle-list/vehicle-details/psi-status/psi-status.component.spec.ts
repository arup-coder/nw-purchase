import { async, TestBed } from '@angular/core/testing';

import { PsiStatusComponent } from './psi-status.component';
import { PsiStatus, PsiStatusUi } from 'src/app/shared/enums/enum';

describe('PsiStatusComponent', () => {

  let component: PsiStatusComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsiStatusComponent ]
    })
    .compileComponents();
  }));

  it('should create instance of PsiStatusComponent and call psiFormatter', () => {
    component =  new PsiStatusComponent();
    component.data = {
      psi: {
        status: PsiStatus.PASSED,
        statusDate: '01/30/20',
      },
    };
    component.ngOnInit();
    expect(component.psiStatus).toBe(`${PsiStatusUi.PASSED}<br>01/30/20`);
  });
});
