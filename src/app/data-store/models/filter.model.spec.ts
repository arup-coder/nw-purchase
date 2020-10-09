import {FilterState} from './filter.model';
import {async, TestBed} from '@angular/core/testing';

describe('Filter Model', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  }));

  beforeEach(() => {

  });

  it('should create alert model', () => {
    let instance = new FilterState();
    expect(JSON.stringify(instance.location)).toEqual(JSON.stringify([]));
    expect(JSON.stringify(instance.organization)).toEqual(JSON.stringify([]));
    expect(instance.vin).toEqual('');
    expect(JSON.stringify(instance.titleStatus)).toEqual(JSON.stringify([]));
    expect(JSON.stringify(instance.psiStatus)).toEqual(JSON.stringify([]));
    expect(JSON.stringify(instance.arbitrationStatus)).toEqual(JSON.stringify([]));
    expect(JSON.stringify(instance.saleDate)).toEqual(JSON.stringify([]));

    instance = new FilterState(['test'], ['test'], 'test', ['test'], ['test'], ['test'], ['test']);
    expect(JSON.stringify(instance.location)).toEqual(JSON.stringify(['test']));
    expect(JSON.stringify(instance.organization)).toEqual(JSON.stringify(['test']));
    expect(instance.vin).toEqual('test');
    expect(JSON.stringify(instance.titleStatus)).toEqual(JSON.stringify(['test']));
    expect(JSON.stringify(instance.psiStatus)).toEqual(JSON.stringify(['test']));
    expect(JSON.stringify(instance.arbitrationStatus)).toEqual(JSON.stringify(['test']));
    expect(JSON.stringify(instance.saleDate)).toEqual(JSON.stringify(['test']));
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
