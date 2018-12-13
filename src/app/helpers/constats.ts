
export class Constants {

    public static PRODUCTION: boolean = !window.location.toString().includes('localhost');

    public static SERVER: string = Constants.PRODUCTION ? '/GettingStarted/' : 'http://127.0.0.1:8080/GettingStarted/';

    public static Version: String = "1.0";

    public static application: String = "Basic Template";

    public static applicationPath: String = "";

    public static logo: String = "../../assets/sanmina/application/angular.png";

    public static ico: String = "../../../../../../sanmina/images/application/favico.ico";

    public static plant: String = "Planta 8"
}
