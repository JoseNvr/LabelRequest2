
export class Constants {

    public static PRODUCTION: boolean = !window.location.toString().includes('localhost');

    public static SERVER: string = Constants.PRODUCTION ? '/TaskIT/' : 'http://127.0.0.1:8080/TaskIT/';

    public static Version: String = "2.0";

    public static application: String = "Task IT";

    public static applicationPath: String = "";

    public static logo: String = "../../assets/sanmina/application/taskit.png";

    public static ico: String = "../../../../../../sanmina/images/application/taskit.ico";

    public static plant: String = "Planta 8"
}
