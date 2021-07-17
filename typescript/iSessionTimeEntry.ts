export interface ISessionTimeEntry {
    startTime: Date;
    endTime?: Date;
    day?: Date;
    durationInMilliseconds?: Object;
    timeEntryId: string;
}