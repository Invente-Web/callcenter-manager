export function putLeftZero(value: any, numberOfDigitsNeeded: number): string {
  return String(value).length < numberOfDigitsNeeded
    ? `0${value}`
    : String(value);
}
