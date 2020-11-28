import { Duration } from "luxon";
// import { DurationCalculator } from "./durationCalculator";

export class DurationFormatter {
    // private static ensureTwoDigits(aValue: number) {
    //     const convertedValue = aValue.toString();
    //     if (convertedValue.length === 2) {
    //         return convertedValue;
    //     }
    //     return '0' + convertedValue;
    // }

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
        const duration: Duration = Duration.fromMillis(durationInMilliseconds);
        return duration.toFormat('hh:mm:ss');
        // TODO: library?
        // https://stackoverflow.com/questions/47223964/convert-milliseconds-to-hhmmss-format-in-angular
    }
}