import { Injectable } from "@angular/core";

import PNotify from "pnotify/dist/es/PNotifyCompat";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";

@Injectable({
  providedIn: "root"
})
export class Notify {
  constructor() {}
  setNotification(title: string, text: string, type: string) {
    PNotifyButtons;
    new PNotify({
      title: title,
      text: text,
      type: type,
      styling: "bootstrap4",
      icons: "fontawesome5",
      delay: "1000"
    });
  }
}
