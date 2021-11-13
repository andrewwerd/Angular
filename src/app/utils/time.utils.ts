export class TimeUtils {
  static oneDayBefore(value: Date) {
    value.setDate(value.getDate() + 1);
  }
}
