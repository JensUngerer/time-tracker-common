import { DurationCalculator } from "./durationCalculator";

export class DurationFormatter {
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