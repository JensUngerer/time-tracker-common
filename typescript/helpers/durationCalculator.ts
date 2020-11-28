import { ITimeEntryDocument } from "../mongoDB/iTimeEntryDocument";
import { IDuration } from "../iDuration";
import { IDate } from "../iDate";
import { Constants } from "../constants";

export class DurationCalculator {
    private static yearMonthDate(aFullDate: Date) {
        const year = aFullDate.getUTCFullYear();
        const month = aFullDate.getUTCMonth();
        const date = aFullDate.getUTCDate() + 1;
        const dayDate = new Date(year, month, date);
        return dayDate;
    }

    public static getDayFrom(aFullDate: Date) {
        // const year = aFullDate.getFullYear();
        // const month = aFullDate.getMonth();
        // const date = aFullDate.getDate() + 1;

        const dayDate = DurationCalculator.yearMonthDate(aFullDate);
        // https://stackoverflow.com/questions/3894048/what-is-the-best-way-to-initialize-a-javascript-date-to-midnight
        // dayDate.setHours(0, 0, 0, 0);
        dayDate.setUTCHours(0, 0, 0, 0);
        return dayDate;
    }

    public static getLatestDayFrom(aFullDate: Date) {
        const dayDate = DurationCalculator.yearMonthDate(aFullDate);
        dayDate.setUTCHours(23, 59, 59, 999);
        const ONE_MILLISECOND_TO_ACHIEVE_AN_OVERFLOW = 1;
        const getTimeNextDay = dayDate.getTime() + ONE_MILLISECOND_TO_ACHIEVE_AN_OVERFLOW;
        const nextDay = new Date(getTimeNextDay);
        return nextDay;
    }

    public static getCurrentDateStructure(dateObject: Date): IDate {
        // const dateObject = new Date();
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        return {
            dayOfMonth: day,
            month,
            year
        }
    }

    public static getSumDataStructureFromMilliseconds(durationInMilliseconds: number): IDuration {
        let timeBuffer = durationInMilliseconds;
        // const milliseconds = timeBuffer % DurationFormatter.MILLISECONDS_IN_SECOND;
        timeBuffer = Math.floor(timeBuffer / Constants.MILLISECONDS_IN_SECOND);
        const seconds = timeBuffer % Constants.SECONDS_IN_MINUTE;
        timeBuffer = Math.floor(timeBuffer / Constants.SECONDS_IN_MINUTE);
        const minutes = timeBuffer % Constants.MINUTES_IN_HOUR;
        timeBuffer = Math.floor(timeBuffer / Constants.MINUTES_IN_HOUR);
        const hours = timeBuffer % Constants.HOURS_IN_DAY;
        timeBuffer = timeBuffer / Constants.HOURS_IN_DAY;
        return {
            hours,
            minutes,
            seconds
        };
    }

    public static calculateTimeDifferenceWithoutPauses(timeEntry: ITimeEntryDocument): number {
        let trackedDurationInMilliseconds = 0;
        if (timeEntry.endTime && timeEntry.startTime) {
            trackedDurationInMilliseconds = DurationCalculator.getTimeDifferenceInMilliseconds(timeEntry.endTime, timeEntry.startTime);
        } else {
            if (!timeEntry.endTime && timeEntry.startTime) {
                trackedDurationInMilliseconds = DurationCalculator.getTimeDifferenceInMilliseconds(new Date(), timeEntry.startTime);
            }
        }
        if (trackedDurationInMilliseconds === 0) {
            console.error('neither endTime nor startTime');
        }

        return trackedDurationInMilliseconds;
    }
    public static calculateDuration(doc: ITimeEntryDocument): string {
        let milliseconds = DurationCalculator.calculateTimeDifferenceWithoutPauses(doc);
        const duration = DurationCalculator.getSumDataStructureFromMilliseconds(milliseconds);
        return DurationCalculator.getFullDurationStr(duration.hours, duration.minutes, duration.seconds);
    }

    public static ensureTwoDigits(aNumber: number): string {
        if (aNumber <= 9) {
            return '0' + aNumber;
        }
        return aNumber.toString();
    }

    public static getDurationStr(hours: number, minutes: number): string {
        return DurationCalculator.ensureTwoDigits(hours) + ':' + DurationCalculator.ensureTwoDigits(minutes);
    }

    public static getFullDurationStr(hours: number, minutes: number, seconds: number) {
        return DurationCalculator.getDurationStr(hours, minutes) + ':' + DurationCalculator.ensureTwoDigits(seconds);
    }

    public static getTimeDifferenceInMilliseconds(endTime: Date, startTime: Date): number {
        const theDuration = endTime.getTime() - startTime.getTime();
        return theDuration;
    }
}