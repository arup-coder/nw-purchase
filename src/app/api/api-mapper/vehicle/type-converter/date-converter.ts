import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import * as moment from 'moment';


@JsonConverter
export class DateConverter implements JsonCustomConvert<string> {
  serialize(date: string): string {
    return date;
  }

  deserialize(date: string): string {
    const stillUtc = moment.utc(date).toDate();
    return moment(stillUtc).local().format('MM/DD/YY');
  }
}
