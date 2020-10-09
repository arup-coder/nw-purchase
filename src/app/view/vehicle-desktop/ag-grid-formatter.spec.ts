import * as formatter from './ag-grid-formatter';


describe('AGGridFormatter', () => {
  it('should titleStatusFormatter', () => {
    const params = {
      data: {
        titleStatus: {
          status: 'ISSUE',
          statusDate: '01/30/20',
        },
      },
    };
    const result = formatter.titleStatusFormatter(params);
    expect(result).toEqual('Issue<br>01/30/20');

    const params2 = {
      data: {
        titleStatus: {
          status: 'NOT_HANDLED',
          statusDate: '01/30/20',
        },
      },
    };
    const result2 = formatter.titleStatusFormatter(params2);
    expect(result2).toEqual('Not Handled');

    const params3 = {
      data: {
        titleStatus: {
          status: 'NOT_HANDLED',
          statusDate: null,
        },
      },
    };
    const result3 = formatter.titleStatusFormatter(params3);
    expect(result3).toEqual('Not Handled');
  });

  it('should postSaleInspectionFormatter', () => {
    const params = {
      data: {
        psi: {
          status: 'PASSED',
          statusDate: '01/30/20',
        },
      },
    };
    const result = formatter.postSaleInspectionFormatter(params);
    expect(result).toEqual('Passed<br>01/30/20');

    const params2 = {
      data: {
        psi: {
          status: 'NOT_ORDERED',
          statusDate: '01/30/20',
        },
      },
    };
    const result2 = formatter.postSaleInspectionFormatter(params2);
    expect(result2).toEqual('Not Ordered');

    const params3 = {
      data: {
        psi: {
          status: 'NOT_ORDERED',
          statusDate: null,
        },
      },
    };
    const result3 = formatter.postSaleInspectionFormatter(params3);
    expect(result3).toEqual('Not Ordered');

    const params4 = {
      data: {
        psi: {
          status: 'PENDING',
          statusDate: '01/30/20',
        }
      },
    };
    const result4 = formatter.postSaleInspectionFormatter(params4);
    expect(result4).toEqual('Pending<br>01/30/20');
  });

  it('should currencyFormatter', () => {
    const data = {
      value: 1234567,
    };
    const result = formatter.currencyFormatter(data);
    expect(result).toEqual('$1,234,567.00');
  });

  it('should dateComparator', () => {
    const date1: any = '07/20/2020'; const date2: any = '07/15/2020';
    const result = formatter.dateComparator(date1, date2);
    expect(result).toEqual(0);
  });

  it('should salesChannelComparator', () => {
    const salesChannel1 = 'INLANE';
    const salesChannel2 = 'INLANE';
    const result = formatter.salesChannelComparator(salesChannel1, salesChannel2);
    expect(result).toEqual(0);

    const salesChannel3 = null;
    const salesChannel4 = 'INLANE';
    const result2 = formatter.salesChannelComparator(salesChannel3, salesChannel4);
    expect(result2).toEqual(-1);

    const salesChannel5 = 'INLANE';
    const salesChannel6 = null;
    const result3 = formatter.salesChannelComparator(salesChannel5, salesChannel6);
    expect(result3).toEqual(1);

    const salesChannel7 = '';
    const salesChannel8 = null;
    const result4 = formatter.salesChannelComparator(salesChannel7, salesChannel8);
    expect(result4).toEqual(0);
  });
});


