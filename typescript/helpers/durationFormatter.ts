export class DurationFormatter {
    public static MILLISECONDS_IN_SECOND = 1000;
    public static SECONDS_IN_MINUTE = 60;
    public static MINUTES_IN_HOUR = 60;
    public static HOURS_IN_DAY = 24;

    private static ensureTwoDigits(aValue: number) {
        const convertedValue = aValue.toString();
        if (convertedValue.length === 2) {
            return convertedValue;
        }
        return '0' + convertedValue;
    }

    private static ensureThreeDigits(aValue: number) {
        const convertedValue = aValue.toString();
        if (convertedValue.length === 3) {
            return convertedValue;
        }
        if (convertedValue.length === 2) {
            return '0' + convertedValue;
        }
        if (convertedValue.length === 1) {
            return '00' + convertedValue;
        }
    }

    static convertToDuration(durationInMilliseconds: number) {
        let timeBuffer = durationInMilliseconds;
        const milliseconds = timeBuffer % DurationFormatter.MILLISECONDS_IN_SECOND;
        timeBuffer = Math.floor(timeBuffer / DurationFormatter.MILLISECONDS_IN_SECOND);
        const seconds = timeBuffer % DurationFormatter.SECONDS_IN_MINUTE;
        timeBuffer = Math.floor(timeBuffer / DurationFormatter.SECONDS_IN_MINUTE);
        const minutes = timeBuffer % DurationFormatter.MINUTES_IN_HOUR;
        timeBuffer = Math.floor(timeBuffer / DurationFormatter.MINUTES_IN_HOUR);
        const hours = timeBuffer % DurationFormatter.HOURS_IN_DAY;
        timeBuffer = timeBuffer / DurationFormatter.HOURS_IN_DAY;

        const twoDigitsHours = DurationFormatter.ensureTwoDigits(hours);
        const twoDigitsMinutes = DurationFormatter.ensureTwoDigits(minutes);
        const twoDigitsSeconds = DurationFormatter.ensureTwoDigits(seconds);
        const threeDigitsMilliseconds = DurationFormatter.ensureThreeDigits(milliseconds);
        return twoDigitsHours + ':' + twoDigitsMinutes + ':' + twoDigitsSeconds + '.' + threeDigitsMilliseconds;

        // TODO: library?
        // return formatDate(durationInMilliseconds, ContextComponent.formatDate, this.currentLocale);
    }
}