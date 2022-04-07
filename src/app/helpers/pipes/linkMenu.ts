import { Pipe, PipeTransform } from "@angular/core";
import { Menu } from "src/app/models/home/home.model";

@Pipe({
  name: "linkMenu",
  pure: false
})
export class LinkMenuPipe implements PipeTransform {
  transform(item: Menu): boolean {
    let isLink = false;
    if (item.link.indexOf('http://') > -1 || item.link.indexOf('https://') > -1) {
      isLink = true;
    }
    return isLink;
  }
}
