import { Duration } from 'luxon';

export class DurationHelper {
    static durationToMillis(duration: Duration) {
        return duration.toMillis();
    }
}