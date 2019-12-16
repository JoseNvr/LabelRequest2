export class Constants {
  public static PRODUCTION: boolean = !window.location
    .toString()
    .includes("localhost");

  public static application: String = "BasicTemplate";
  public static applicationName: String = "Basic Template";

  public static SERVER: string = Constants.PRODUCTION
    ? "/" + Constants.application + "/"
    : "http://127.0.0.1:8080/" + Constants.application + "/";

  public static masterPageVersion: String = "1.2.0.0";

  public static logo: String = "assets/sanmina/application/angular.png";

  public static ico: String ="assets/sanmina/images/application/favico.ico";

  public static localStorage: string = Constants.application + "_dataAuth";

  public static plantLS: string = Constants.application + "_plant";
}
