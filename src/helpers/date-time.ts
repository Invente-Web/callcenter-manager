import { intervalToDuration } from 'date-fns';
import { putLeftZero } from 'helpers';

export function formatSecondsInHours(seconds: number): string {
  const time = intervalToDuration({ start: 0, end: seconds * 1000 });
  return `${putLeftZero(time.hours, 2)}:${putLeftZero(
    time.minutes,
    2
  )}:${putLeftZero(time.seconds, 2)}`;
}
