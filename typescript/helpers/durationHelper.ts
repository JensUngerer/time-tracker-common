import { Duration } from 'luxon';
import { Constants } from './../constants';

export class DurationHelper {
    static durationToMillis(duration: Duration) {
        const days = duration.days;
        const hours = duration.hours;
        const minutes = duration.minutes;
        const seconds = duration.seconds;
        const milliseconds = duration.milliseconds;

        let millisecondsSum = 0;

        millisecondsSum += milliseconds;

        millisecondsSum += seconds * Constants.MILLISECONDS_IN_SECOND;

        millisecondsSum += minutes * Constants.MILLISECONDS_IN_MINUTE;

        millisecondsSum += hours * Constants.MILLISECONDS_IN_HOUR;

        millisecondsSum += days * Constants.MILLISECONDS_IN_DAY;

        return millisecondsSum;
    }
}