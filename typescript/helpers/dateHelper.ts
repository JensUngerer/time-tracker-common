export class DateHelper {
  static convertToUtc(date: Date) {
    // https://stackoverflow.com/questions/948532/how-do-you-convert-a-javascript-date-to-utc
    const utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
      date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    return new Date(utc);
  }
}
