import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titleCase"
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;
    let prepositions = ["of", "the", "and", "to"];

    let words = value.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (i > 0 && prepositions.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] =
          words[i].substr(0, 1).toUpperCase() +
          words[i].substr(1).toLowerCase();
      }
    }
    return words.join(" ");
  }
}
