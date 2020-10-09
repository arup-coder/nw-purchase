import {async, TestBed} from '@angular/core/testing';
import {FileClaimComponent} from './file-claim.component';

describe('FileClaimComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileClaimComponent],
    })
        .compileComponents();
  }));

  it('should create instance of FileClaimComponent', () => {
    const component =  new FileClaimComponent();
  });

});
