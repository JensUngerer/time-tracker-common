import { DurationCalculator } from "./durationCalculator";

export class DurationFormatter {
    public static MILLISECONDS_IN_SECOND = 1000;
    public static SECONDS_IN_MINUTE = 60;
    public static MINUTES_IN_HOUR = 60;
    public static HOURS_IN_DAY = 24;

    public static hoursInMilliseconds = (1000 * 60 * 60);

    private static ensureTwoDigits(aValue: number) {
        const convertedValue = aValue.toString();
        if (convertedValue.length === 2) {
            return convertedValue;
        }
        return '0' + convertedValue;
    }

    // private static ensureThreeDigits(aValue: number) {
    //     const convertedValue = aValue.toString();
    //     if (convertedValue.length === 3) {
    //         return convertedValue;
    //     }
    //     if (convertedValue.length === 2) {
    //         return '0' + convertedValue;
    //     }
    //     if (convertedValue.length === 1) {
    //         return '00' + convertedValue;
    //     }
    // }

    static convertToDuration(durationInMilliseconds: number) {
        const durationStructure = DurationCalculator.getSumDataStructureFromMilliseconds(durationInMilliseconds);
        const twoDigitsHours = DurationFormatter.ensureTwoDigits(durationStructure.hours);
        const twoDigitsMinutes = DurationFormatter.ensureTwoDigits(durationStructure.minutes);
        const twoDigitsSeconds = DurationFormatter.ensureTwoDigits(durationStructure.seconds);
        // const threeDigitsMilliseconds = DurationFormatter.ensureThreeDigits(durationStructure.milliseconds);
        return twoDigitsHours + ':' + twoDigitsMinutes + ':' + twoDigitsSeconds; // + '.' + threeDigitsMilliseconds;

        // TODO: library?
        // return formatDate(durationInMilliseconds, ContextComponent.formatDate, this.currentLocale);
    }
}