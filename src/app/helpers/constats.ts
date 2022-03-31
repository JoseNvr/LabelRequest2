export class Constants {
  public static PRODUCTION: boolean = !window.location
    .toString()
    .includes("localhost");

  public static application: String = "LabelRequest2";
  public static applicationName: String = "LabelRequest2";

  public static SERVER: string = Constants.PRODUCTION
    ? "/" + Constants.application + "/"
    : "http://localhost:8080/" + Constants.application + "/";

  public static masterPageVersion: String = "1.2.0.2";

  public static logo: String = "assets/sanmina/application/angular.png";

  public static ico: String = "assets/sanmina/images/application/favico.ico";

  public static localStorage: string = Constants.application + "_dataAuth";

  public static plantLS: string = Constants.application + "_plant";

  public static BarcodeUggly : String;

  public static BarcodePretty : String;

  public static PartnumberBarcode : String;
 

}

