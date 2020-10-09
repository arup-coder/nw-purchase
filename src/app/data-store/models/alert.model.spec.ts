import {AlertConfig} from './alert.model';
import {async, TestBed} from '@angular/core/testing';

describe('Alert Model', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  }));

  beforeEach(() => {

  });

  it('should create alert model', () => {
    let instance = new AlertConfig();
    expect(instance.type).toEqual('');
    expect(JSON.stringify(instance.heading)).toEqual(JSON.stringify({label: '', id: ''}));
    expect(JSON.stringify(instance.content)).toEqual(JSON.stringify({label: '', id: ''}));
    expect(JSON.stringify(instance.acceptBtn)).toEqual(JSON.stringify({label: '', id: '', class: '', type: ''}));
    expect(JSON.stringify(instance.rejectBtn)).toEqual(JSON.stringify({label: '', id: '', class: '', type: ''}));
    expect(JSON.stringify(instance.contentIcon)).toEqual(JSON.stringify({path: '', alt: ''}));
    expect(JSON.stringify(instance.closeIcon)).toEqual(JSON.stringify({path: '', alt: '', wrapperClass: ''}));
    expect(JSON.stringify(instance.reloadBtn)).toEqual(JSON.stringify({label: '', id: '', class: '', type: ''}));


    instance = new AlertConfig('test', {label: 'test', id: 'test'}, {label: 'test', id: 'test'}, {label: 'test',
      id: 'test', class: 'test', type: 'test'}, {label: 'test', id: 'test', class: 'test', type: 'test'}, {path: 'test', alt: 'test'},
    {path: 'test', alt: 'test', wrapperClass: 'test'}, {label: 'test', id: 'test', class: 'test', type: 'test'});
    expect(instance.type).toEqual('test');
    expect(JSON.stringify(instance.heading)).toEqual(JSON.stringify({label: 'test', id: 'test'}));
    expect(JSON.stringify(instance.content)).toEqual(JSON.stringify({label: 'test', id: 'test'}));
    expect(JSON.stringify(instance.acceptBtn)).toEqual(JSON.stringify({label: 'test', id: 'test', class: 'test', type: 'test'}));
    expect(JSON.stringify(instance.rejectBtn)).toEqual(JSON.stringify({label: 'test', id: 'test', class: 'test', type: 'test'}));
    expect(JSON.stringify(instance.contentIcon)).toEqual(JSON.stringify({path: 'test', alt: 'test'}));
    expect(JSON.stringify(instance.closeIcon)).toEqual(JSON.stringify({path: 'test', alt: 'test', wrapperClass: 'test'}));
    expect(JSON.stringify(instance.reloadBtn)).toEqual(JSON.stringify({label: 'test', id: 'test', class: 'test', type: 'test'}));
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
