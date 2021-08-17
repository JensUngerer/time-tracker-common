import { DurationObject } from "luxon";

export interface ITimeEntryBase {
    timeEntryId: string;
    startTime: Date;
    endTime?: Date;
    durationInMilliseconds?: DurationObject;
    day?: Date;
}

export interface ITimeEntry extends ITimeEntryBase {
    _taskId: string;
    _bookingDeclarationId: string;
}