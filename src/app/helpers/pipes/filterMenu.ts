import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterMenu",
  pure: false
})
export class FilterMenuPipe implements PipeTransform {
  transform(array: any[], field: any): any[] {
    return array.filter(item => {
      let idFatherMenu = 0;
      if (!item.idFatherMenu) {
        idFatherMenu = item.idFatherMenu;
      }
      return idFatherMenu === field;
    });
  }
}
