
import { IVehicle } from 'src/app/data-store/models/vehicle.model';
import { currencyFormatter } from 'src/app/view/vehicle-desktop/ag-grid-formatter';
import { GLOBAL_SETTINGS } from '../global-config';

export class VehiclesExportMapper {
   static options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      filename: GLOBAL_SETTINGS.exportFileName,
      title: GLOBAL_SETTINGS.exportFileName,
      useTextFile: false,
      useBom: true,
      headers: [
         'Year',
         'Make',
         'Model',
         'Series',
         'Trim',
         'Vin',
         'Assurance Eligible',
         'Price',
         'Sale Date',
         'Title Status',
         'Title Status Date',
         'PSI/PDI Status',
         'PSI/PDI Status Date',
         'Payment Status',
         'Odometer',
         'Odometer Unit',
         'Exterior Color',
         'Interior Color',
         'Buyer Organization Name',
         'Buyer Rep',
         'Sale Channel',
         'Location Name',
         'Address',
         'City',
         'State   ',
         'Zip',
         'Phone',
         'Title Release Method',
         'Title Shipping Tracking Number',
         'Title Shipping Carrier',
         'Assurance Status',
         'Assurance Status Date',
         'Arbitration Status',
         'Arbitration Status Date',
      ]
   };
   public year;
   public make;
   public model;
   public series;
   public trim;
   public vin;
   public assuranceEligible;
   public price;
   public saleDate;
   public titleStatus;
   public titleStatusDate;
   public psiStatus;
   public psiStatusDate;
   public paymentStatus;
   public odometer;
   public odometerUnit;
   public exteriorColor;
   public interiorColor;
   public buyerOrganizationName;
   public buyerRep;
   public saleChannel;
   public locationName;
   public address;
   public city;
   public state;
   public zip;
   public phone;
   public titleReleaseMethod;
   public titleShippingTrackingNumber;
   public titleShippingCarrier;
   public assuranceStatus;
   public assuranceStatusDate;
   public arbitrationStatus;
   public arbitrationStatusDate;

   constructor(vehicle: IVehicle) {

      this.year = vehicle.year || '';
      this.make = vehicle.make || '';
      this.model = vehicle.model || '';
      this.series = vehicle.series || '';
      this.trim = vehicle.trim || '';
      this.vin = vehicle.vin || '';
      this.assuranceEligible = (vehicle.adesaAssuranceEligible) ? 'Eligible' : 'Not Eligible';
      this.price = (vehicle.purchases && vehicle.purchases.amount) ?  currencyFormatter({ value : vehicle.purchases.amount }) : '';
      this.saleDate = vehicle.soldDateMMDDYY || '';
      this.titleStatus = (vehicle.titleStatus && vehicle.titleStatus.status ) ? vehicle.titleStatus.status : '' ;
      this.titleStatusDate = (vehicle.titleStatus && vehicle.titleStatus.statusDate ) ? vehicle.titleStatus.statusDate : '';
      this.psiStatus = (vehicle.psi && vehicle.psi.status ) ? vehicle.psi.status : '';
      this.psiStatusDate = (vehicle.psi && vehicle.psi.statusDate ) ? vehicle.psi.statusDate : '';
      this.paymentStatus = '';
      this.odometer = vehicle.odometer || '';
      this.odometerUnit = vehicle.odometerUnitOfMeasure || '';
      this.exteriorColor = vehicle.exteriorColor || '';
      this.interiorColor = vehicle.interiorColor || '';
      this.buyerOrganizationName = vehicle.buyerOrganizationName || '';
      this.buyerRep = vehicle.buyerName || '';
      this.saleChannel = vehicle.auctionChannelValue || '';
      this.locationName = (vehicle.location && vehicle.location.locationName) ?  vehicle.location.locationName : '';
      this.address = (vehicle.location &&  vehicle.location.address) ?  vehicle.location.address : '';
      this.city = (vehicle.location && vehicle.location.city ) ?  vehicle.location.city : '';
      this.state = (vehicle.location && vehicle.location.state) ?  vehicle.location.state : '';
      this.zip = (vehicle.location &&  vehicle.location.zip) ?  vehicle.location.zip : '';
      this.phone = (vehicle.location && vehicle.location.phoneNumber) ?  vehicle.location.phoneNumber : '';
      this.titleReleaseMethod = (vehicle.titleStatus &&  vehicle.titleStatus.releaseMethod ) ?  vehicle.titleStatus.releaseMethod : '';
      this.titleShippingTrackingNumber = (vehicle.titleStatus && vehicle.titleStatus.shippingTrackingNumber)
      ?  vehicle.titleStatus.shippingTrackingNumber  : '';
      this.titleShippingCarrier = (vehicle.titleStatus && vehicle.titleStatus.shippingCarrier)
      ?  vehicle.titleStatus.shippingCarrier || '' : '';
      this.assuranceStatus = vehicle.adesaAssuranceStatus || '';
      this.assuranceStatusDate = vehicle.adesaAssuranceDate || '';
      this.arbitrationStatus = (vehicle.arbitration && vehicle.arbitration.status ) ? vehicle.arbitration.status : '';
      this.arbitrationStatusDate = (vehicle.arbitration && vehicle.arbitration.statusDate ) ? vehicle.arbitration.statusDate : '';

      if (this.titleStatus) {
         this.titleStatus = this.titleCase(this.titleStatus);
      }
      if (this.assuranceStatus) {
         this.assuranceStatus = this.titleCase(this.assuranceStatus);
      }
      if (this.arbitrationStatus) {
         this.arbitrationStatus = this.titleCase(this.arbitrationStatus);
      }
      if (this.psiStatus) {
         this.psiStatus = this.titleCase(this.psiStatus);
      }

   }
   private titleCase(sentence) {
      sentence = sentence.replace(/\w\S*/g,(txt) =>  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      return sentence.replace('_', ' ');
   }
}
