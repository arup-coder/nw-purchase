export const etrMock = {
  data: [
    {
      sourcePurchaseId: 'a499dcf0-bb7b-4766-a3a6-61f183b8c643',
      buyer: {
        name: 'AUDI3_',
        auctionAccessId: '5466300',
      },
      purchaseDate: '2020-06-24T10:07:49',
      sourceMessageSequence: 1595182121079,
      currency: 'USD',
      assurance: {
        price: 17000,
        terms: 'mockTerms3',
        expirationDate: '2022-01-29T15:50:23.091',
        reasons: [
          'mockReason1_3',
          'mockReason2_3',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'REJECTED',
          date: '2020-01-30T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'Released',
        status: {
          name: 'Released',
          date: '2020-06-12T18:07:50',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: '234563ABC38900',
          courierName: 'mockCourierName',
          dateShipped: '2020-02-15T15:50:23.091',
        },
      },
      postSaleInspection: {
        status: {
          name: 'Completed - Contact the Auction',
          date: '2020-06-11T18:07:50',
        },
        options: [
          {
            price: 17000,
            description: 'service-price',
          },
        ],
        expirationDate: '2020-02-15T15:50:23.091',
      },
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '2020-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'In Arbitration',
          date: '2020-02-27T15:50:23.091',
        },
      },
      totalAmountDue: 7654321,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: '5NPD84LF8KH418002',
        model: 'Test Vehicle Name',
        make: 'Test Make Name',
        year: 2020,
        odometer: {
          unitOfMeasure: 'MI',
          value: 27002,
        },
        exteriorColor: 'silver',
        interiorColor: 'BLACK',
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=C68B4DFE-21CA-5A4E-8A0C-5E4096BCAD28',
        trim: 'trim_NAME',
        series: 'SER_NAME',
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'N SYRACUSE',
            country: 'US',
            stateProvince: 'NY',
            postalCode: '13212',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: '9d4358e6-bad9-448d-a604-219b3e965557',
      buyer: {
        name: 'AUDI',
        auctionAccessId: '5466300',
      },
      purchaseDate: '2020-07-24T10:07:49',
      sourceMessageSequence: 1595182121079,
      currency: 'USD',
      assurance: {
        price: 17000,
        terms: 'mockTerms1',
        expirationDate: '2022-01-29T15:50:23.091',
        reasons: [
          'mockReason1_2',
          'mockReason2_2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'REJECTED',
          date: '2020-01-30T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'Pulled',
        status: {
          name: 'Received',
          date: '2020-07-120T18:07:50',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: '234563ABC38900',
          courierName: 'mockCourierName',
          dateShipped: '2020-02-15T15:50:23.091',
        },
      },
      postSaleInspection: {
        status: {
          name: 'Cancelled',
          date: '2020-06-20T18:07:50',
        },
        options: [
          {
            price: 17000,
            description: 'service-price',
          },
        ],
        expirationDate: '2020-02-15T15:50:23.091',
      },
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '2020-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'In Arbitration',
          date: '2020-02-27T15:50:23.091',
        },
      },
      totalAmountDue: 7654321,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: '5NPD84LF8KH418002',
        model: 'Tigor_2',
        make: 'Tata_2',
        year: 2017,
        odometer: {
          unitOfMeasure: 'MI',
          value: 27002,
        },
        exteriorColor: 'silver',
        interiorColor: 'BLACK',
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=C68B4DFE-21CA-5A4E-8A0C-5E4096BCAD28',
        trim: 'trim_2',
        series: 'SEL_2',
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'N SYRACUSE',
            country: 'US',
            stateProvince: 'NY',
            postalCode: '13212',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: 'e399d7d7-0606-5612-957d-43df08c3ba84',
      buyer: {
        name: 'ANTWERPEN MITSUBISHI',
        auctionAccessId: '5466365',
      },
      purchaseDate: '2020-07-23T18:07:49',
      sourceMessageSequence: 1595182121079,
      currency: 'USD',
      assurance: {
        price: 12000,
        terms: 'mockTerms',
        expirationDate: '1970-01-29T15:50:23.091',
        reasons: [
          'mockReason1',
          'mockReason2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'SUBMITTED',
          date: '1970-01-29T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'COURIER',
        status: {
          name: 'Contact Customer Support',
          date: '2020-07-19T18:07:50',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: 'mockTrackingNumber',
          courierName: 'mockCourierName',
          dateShipped: '1970-01-29T15:50:23.091',
        },
      },
      postSaleInspection: null,
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '1970-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'ACTIVE',
          date: '1970-01-29T15:50:23.091',
        },
      },
      totalAmountDue: 700000,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: '5NPD84LF8KH418000',
        model: 'Tigor',
        make: 'Tata',
        year: 2017,
        odometer: {
          unitOfMeasure: 'MI',
          value: 27000,
        },
        exteriorColor: 'silver',
        interiorColor: 'BLACK',
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=C68B4DFE-21CA-5A4E-8A0C-5E4096BCAD28',
        trim: null,
        series: 'SEL',
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'N SYRACUSE',
            country: 'US',
            stateProvince: 'NY',
            postalCode: '13212',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: 'e399d7d7-0606-5612-957d-43df08c3ba85',
      buyer: {
        name: 'ANTWERPEN MITSUBISHI',
        auctionAccessId: '5466365',
      },
      purchaseDate: '2020-07-19T18:07:49',
      sourceMessageSequence: 1595182121079,
      currency: 'USD',
      assurance: {
        price: 12000,
        terms: 'mockTerms',
        expirationDate: '1970-01-29T15:50:23.091',
        reasons: [
          'mockReason1',
          'mockReason2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'SUBMITTED',
          date: '1970-01-29T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'COURIER',
        status: {
          name: 'Contact Customer Support',
          date: '2020-07-19T18:07:50',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: 'mockTrackingNumber',
          courierName: 'mockCourierName',
          dateShipped: '1970-01-29T15:50:23.091',
        },
      },
      postSaleInspection: null,
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '1970-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'ACTIVE',
          date: '1970-01-29T15:50:23.091',
        },
      },
      totalAmountDue: 700000,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: '5NPD84LF8KH418734',
        model: 'Elantra',
        make: 'Hyundai',
        year: 2019,
        odometer: {
          unitOfMeasure: 'MI',
          value: 27005,
        },
        exteriorColor: 'silver',
        interiorColor: 'BLACK',
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=C68B4DFE-21CA-5A4E-8A0C-5E4096BCAD29',
        trim: null,
        series: 'SEL',
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'N SYRACUSE',
            country: 'US',
            stateProvince: 'NY',
            postalCode: '13212',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: '16211f18-165b-5434-ab56-d4add07f4e4a',
      buyer: {
        name: 'ANTWERPEN VW',
        auctionAccessId: '5096210',
      },
      purchaseDate: '2020-07-19T18:07:50',
      sourceMessageSequence: 1595182118987,
      currency: 'USD',
      assurance: {
        price: 12000,
        terms: 'mockTerms',
        expirationDate: '1970-01-29T15:50:23.091',
        reasons: [
          'mockReason1',
          'mockReason2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'SUBMITTED',
          date: '1970-01-29T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'COURIER',
        status: {
          name: 'Contact Customer Support',
          date: '2020-07-19T18:07:51',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: 'mockTrackingNumber',
          courierName: 'mockCourierName',
          dateShipped: '1970-01-29T15:50:23.091',
        },
      },
      postSaleInspection: null,
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '1970-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'ACTIVE',
          date: '1970-01-29T15:50:23.091',
        },
      },
      totalAmountDue: 700000,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: 'mockVin',
        model: 'mockModel',
        make: 'mockMake',
        year: 1970,
        odometer: {
          unitOfMeasure: 'KM',
          value: 20000,
        },
        exteriorColor: 'mockColor',
        interiorColor: null,
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=B3796C44-1F09-5374-98A3-F6770A7592E8',
        trim: null,
        series: null,
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'mockCity',
            country: 'CA',
            stateProvince: 'mockProvince',
            postalCode: 'mockZip',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: '88520a32-92aa-56c7-9365-727bd4bc39a3',
      buyer: {
        name: 'ANTWERPEN VW',
        auctionAccessId: '5096210',
      },
      purchaseDate: '2020-07-19T18:07:49',
      sourceMessageSequence: 1595182116610,
      currency: 'USD',
      assurance: {
        price: 12000,
        terms: 'mockTerms',
        expirationDate: '1970-01-29T15:50:23.091',
        reasons: [
          'mockReason1',
          'mockReason2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'SUBMITTED',
          date: '1970-01-29T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'COURIER',
        status: {
          name: 'Contact Customer Support',
          date: '2020-07-19T18:07:51',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: 'mockTrackingNumber',
          courierName: 'mockCourierName',
          dateShipped: '1970-01-29T15:50:23.091',
        },
      },
      postSaleInspection: null,
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '1970-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'ACTIVE',
          date: '1970-01-29T15:50:23.091',
        },
      },
      totalAmountDue: 700000,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: '3VWC57BU4KM122042',
        model: 'Jetta',
        make: 'Volkswagen',
        year: 2019,
        odometer: {
          unitOfMeasure: 'MI',
          value: 31311,
        },
        exteriorColor: 'gray',
        interiorColor: 'BLACK',
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=CEAD1D23-BA87-5D5D-9BA4-99446A31C431',
        trim: null,
        series: 'S',
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'SANDSTON',
            country: 'US',
            stateProvince: 'VA',
            postalCode: '23150',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: '4c284780-e8d7-55a3-a2a1-d1cee4d10aea',
      buyer: {
        name: 'NISSAN OF YORKTOWN HEIGHTS',
        auctionAccessId: '5424690',
      },
      purchaseDate: '2020-07-19T18:07:50',
      sourceMessageSequence: 1595182114543,
      currency: 'USD',
      assurance: {
        price: 12000,
        terms: 'mockTerms',
        expirationDate: '1970-01-29T15:50:23.091',
        reasons: [
          'mockReason1',
          'mockReason2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'SUBMITTED',
          date: '1970-01-29T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'COURIER',
        status: {
          name: 'Contact Customer Support',
          date: '2020-07-19T18:07:51',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: 'mockTrackingNumber',
          courierName: 'mockCourierName',
          dateShipped: '1970-01-29T15:50:23.091',
        },
      },
      postSaleInspection: null,
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '1970-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'ACTIVE',
          date: '1970-01-29T15:50:23.091',
        },
      },
      totalAmountDue: 700000,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: '5NPD84LF5JH309145',
        model: 'Elantra',
        make: 'Hyundai',
        year: 2018,
        odometer: {
          unitOfMeasure: 'MI',
          value: 80746,
        },
        exteriorColor: 'blue',
        interiorColor: 'gray',
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=2F1F69AF-1465-58A9-904F-4E3CBE975B28',
        trim: null,
        series: 'SEL',
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'NEWARK',
            country: 'US',
            stateProvince: 'NJ',
            postalCode: '07114',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
    {
      sourcePurchaseId: '55736dd9-a48b-5914-9e2e-8208ff0146ca',
      buyer: {
        name: 'ANTWERPEN MITSUBISHI',
        auctionAccessId: '5466365',
      },
      purchaseDate: '2020-07-19T18:07:50',
      sourceMessageSequence: 1595182113049,
      currency: 'USD',
      assurance: {
        price: 12000,
        terms: 'mockTerms',
        expirationDate: '1970-01-29T15:50:23.091',
        reasons: [
          'mockReason1',
          'mockReason2',
        ],
        isSubscribed: false,
        isEligible: true,
        status: {
          name: 'SUBMITTED',
          date: '1970-01-29T15:50:23.091',
        },
      },
      title: {
        releaseMethod: 'COURIER',
        status: {
          name: 'Contact Customer Support',
          date: '2020-07-19T18:07:51',
        },
        shippingInfo: {
          options: null,
          isAvailable: true,
          trackingNumber: 'mockTrackingNumber',
          courierName: 'mockCourierName',
          dateShipped: '1970-01-29T15:50:23.091',
        },
      },
      postSaleInspection: null,
      preDeliveryInspection: {
        status: {
          name: 'mockPDIStatus',
          date: '1970-01-29T15:50:23.091',
        },
        options: null,
      },
      transport: null,
      photos: null,
      arbitration: {
        status: {
          name: 'ACTIVE',
          date: '1970-01-29T15:50:23.091',
        },
      },
      totalAmountDue: 700000,
      purchasePaymentStatus: 'DUE',
      metadata: {
        $type: 'VehiclePurchaseMetadata',
        vin: 'mockVin',
        model: 'mockModel',
        make: 'mockMake',
        year: 1970,
        odometer: {
          unitOfMeasure: 'KM',
          value: 20000,
        },
        exteriorColor: 'mockColor',
        interiorColor: null,
        imageUrl: null,
        detailedInfoUrl: '/mfe/vdp?vehicleId=8C507E13-6539-5374-AC98-A128C904EB64',
        trim: null,
        series: null,
      },
      purchaseInfo: {
        metadata: {
          $type: 'OnlinePurchaseInfoMetadata',
          location: {
            name: 'mockLocationName',
            addressLine: 'mockAddressLine',
            city: 'mockCity',
            country: 'CA',
            stateProvince: 'mockProvince',
            postalCode: 'mockZip',
            phone: '',
            addressLine2: 'mockAddressLine2',
          },
        },
      },
      lineItemGroups: [
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'FeeLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 100,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockFeeLineItemSourceId',
              amount: 10000,
            },
          ],
        },
        {
          paymentDueDate: '1970-01-29T15:50:23.091',
          paymentStatus: 'DUE',
          isPayableOnline: true,
          lineItems: [
            {
              $type: 'PurchasePriceLineItem',
              description: 'mockDescription',
              taxes: [
                {
                  amount: 3000,
                  name: 'mockTaxName',
                },
              ],
              sourceId: 'mockPurchasePriceLineItemSourceId',
              amount: 3000000,
            },
            {
              $type: 'TaxLineItem',
              description: 'mockDescription',
              sourceId: 'mockTaxLineItemSourceId',
              amount: 20000,
            },
          ],
        },
      ],
      documents: null,
      region: 'US',
      purchaser: null,
    },
  ],
};
