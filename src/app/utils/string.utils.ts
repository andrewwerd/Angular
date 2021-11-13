export class StringUtils {
  static capitalize(value: string): string {
    return value ? value[0].toUpperCase() + value.slice(1) : '';
  }
}
