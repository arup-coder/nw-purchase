type EnvironmentType = typeof import('./../../assets/environments/localhost.json');

export const MockEnvData: EnvironmentType = {
  production: false,
  supportsNonSsoLogin: true,
  salesScheduleAssetsPathPrefix: '',
  utilPath: {
    asset: 'assets',
    imagesCdn: '',
    webApi: '',
  },
  domains: {
    classic: 'https://buy.test1.adesa.ca/openauctionca',
    nw: 'https://oaca-testdev.nw.adesa.com',
  },
  interfacePath: {
    buyerOa: 'https://buy.test1.adesa.com/openauction',
    seller: 'https://sell.test1.adesa.ca/ideal/summary.html?ACTION=RESET&',
    logout: 'https://buy.test1.adesa.ca/openauctionca/logout.html',
    helpResources: 'https://help.stage.adesa.ca',
    legal: 'https://img.stg.autc.com/OA/Legal/CALegal_en.pdf',
    privacyPolicy: 'https://img.stg.autc.com/OA/Legal/CAPrivacyPolicy_en.pdf',
    termsAndConditions: 'https://buy.test1.adesa.ca/openauctionca/toc.html',
    auctionLocator: 'https://www.stage.adesa.ca/all-auctions?locale=en_US&logged_in=true',
    appstore: 'https://itunes.apple.com/ca/app/adesa-marketplace/id903860668',
    googleplay: 'https://play.google.com/store/apps/details?id=com.adesa.marketplace&hl=en',
    chatUS: 'http://kar.force.com/resources/PreChatPostLogin?endpoint=https%3A%2F%2Fj987.la4-c2-phx.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%23deployment_id%3D572130000008juw%26org_id%3D00D30000001HOh2%26button_id%3D57313000000CwAX%26session_id%3D8b671094-c2e0-4e64-b320-96be9b807b73',
    chatCA: 'http://kar.force.com/resources/PreChatPostLoginCA?endpoint=https%3A%2F%2Fj0gu.la4-c2-phx.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%23deployment_id%3D572130000008juw%26org_id%3D00D30000001HOh2%26button_id%3D57313000000CwAT%26session_id%3Daefb6b84-a94e-4610-a529-2fff522c9256',
    surveymonkey: '',
    surveymonkeyVdp: '',
  },
  purchase: {
    vehicle: 'http://localhost:3000/getVehicles',
    vehicleCount: 'http://localhost:3000/getVehiclesCount',
    updatedVehiclesCount: 'http://localhost:3000/updatedVehiclesCount',
    isClassicVdp: true,
    dummyEtrVehicle: '',
    etrRegion : 'CA'
  },
  env: 'testdev',
  defaultComMenuUrl: '',
  simulcastTestUrl: '',
  countryCode: 2,
  allowedUsers: '',
};

export const mockSessionStorageData = {
  userPreferences: {
    currentBetaWatchlistselected: 'Classic',
    default10BBG: 'false',
    default30BBG: 'false',
    default30For30: 'false',
    defaultBackUpPaymentMethod: '0',
    defaultHRImage: 'false',
    defaultPSIByAuction: 'false',
    defaultPSIVendor: '',
    defaultPaymentMethod: '0',
    defaultTransport: '0',
    isNWSearchEnabled: 'true',
    isNWWatchListBetaTester: 'true',
    isNWWatchListTried: 'false',
    isNewWaveEnabled: 'true',
    isRecommendationsEnabled: 'true',
    rebidEnabled: 'false',
  },
};
