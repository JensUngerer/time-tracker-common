export interface ITimeEntry {
    timeEntryId: string;
    _taskId: string;
    startTime: Date;
    endTime: Date;
    durationInMilliseconds: object;
    day: Date;
    _bookingDeclarationId: string;
}