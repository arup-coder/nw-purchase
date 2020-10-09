export class Immutable {
  public static setIn(srcObj: object, propName: string, propVal: any): any {
    return {
      ...srcObj,
      [propName]: propVal,
    };
  }

  public static getIn(srcObj: object, propName: string): any {
    return srcObj[propName];
  }
}
