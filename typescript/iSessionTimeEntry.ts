import { DurationObject } from "luxon";

export interface ISessionTimeEntry {
    startTime: Date;
    endTime?: Date;
    day?: Date;
    durationInMilliseconds?: DurationObject;
    timeEntryId: string;
}