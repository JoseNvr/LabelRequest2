export class Constants {
  public static PRODUCTION: boolean = !window.location
    .toString()
    .includes("localhost");

  public static application: String = "BasicTemplate";
  public static applicationName: String = "BasicTemplate";

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

  public static Projects: any[] = [
    { name: "NOKIA", sfdc_id: 'p2444dc2', station_type: "device", station: "320" },
    { name: "TESLA", sfdc_id: 'p2448dc1', station_type: "device", station: "998" },
    { name: "HARMAN", sfdc_id: 'p2448dc5', station_type: "device", station: "029" }
  ];
  public static WorkstationPermited: any[] = [
    { workstation: "SFPA", unit_status: 30 },
    { workstation: "KILL", unit_status: 26 },
  ];
  public static Partnumbers_Password: any[] = [
    { part_number: "LFKBT50-1129-01" }
  ];
  public static Partnumbers_top_level: any[] = [
    { part_number: "LFKBT3HE12472AAAA0201" },
    { part_number: "LFKBT3HE12472AAAA0301" },
    { part_number: "LFKBT3HE12472AAAA0401" },
    { part_number: "LFKBT3HE12472AAAA0501" },
    { part_number: "LFKBT3HE12472AAAA0601" },
    { part_number: "LFKBT3HE12472AAAA0701" },
    { part_number: "LFKBT3HE12472AAAA0801" },
    { part_number: "LFKBT3HE12472AAAA0901" },
    { part_number: "LFKBT3HE12472AAAA1001" },
    { part_number: "LFKBT3HE12472AAAA1101" },
    { part_number: "LFKBT3HE12472AAAA1201" },
    { part_number: "LFKBT3HE12472AAAA1301" },
    { part_number: "LFKBT3HE12472AAAA1401" },
    { part_number: "LFKBT3HE12472AAAA1501" },
    { part_number: "LFKBT3HE12472AAAA1801" },
    { part_number: "LFKBT3HE12474AAAA0201" },
    { part_number: "LFKBT3HE12474AAAA0301" },
    { part_number: "LFKBT3HE12474AAAA0401" },
    { part_number: "LFKBT3HE12474AAAA0501" },
    { part_number: "LFKBT3HE12474AAAA0601" },
    { part_number: "LFKBT3HE12474AAAA0701" },
    { part_number: "LFKBT3HE12474AAAA0801" },
    { part_number: "LFKBT3HE12474AAAA0901" },
    { part_number: "LFKBT3HE12474AAAA1001" },
    { part_number: "LFKBT3HE12474AAAA1101" },
    { part_number: "LFKBT3HE12474AAAA1201" },
    { part_number: "LFKBT3HE12474AAAA1301" },
    { part_number: "LFKBT3HE12474AAAA1501" },
    { part_number: "LFKBT3HE12475AAAA0101" },
    { part_number: "LFKBT3HE12475AAAA0201" },
    { part_number: "LFKBT3HE12475AAAA0301" },
    { part_number: "LFKBT3HE12475AAAA0401" },
    { part_number: "LFKBT3HE12475AAAA0501" },
    { part_number: "LFKBT3HE12475AAAA0701" }
  ];

}

