export class Constants {
  public static PRODUCTION: boolean = !window.location
    .toString()
    .includes("localhost");

  public static application: String = "SmartPlannerWeb";
  public static applicationName: String = "SmartPlannerWeb";

  public static SERVER: string = Constants.PRODUCTION
    ? "/" + Constants.application + "/"
    : "http://localhost:8080/" + Constants.application + "/";

  public static masterPageVersion: String = "1.2.0.1";

  public static logo: String = "assets/sanmina/application/SmartplannerTranparencia.png";

  public static ico: String = "assets/sanmina/application/Smartplanner_Icon.ico";

  public static localStorage: string = Constants.application + "_dataAuth";

  public static plantLS: string = Constants.application + "_plant";
}
