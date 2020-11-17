export interface ITimeEntry {
    timeEntryId: string;
    _taskId: string;
    startTime: Date;
    endTime: Date;
    durationInMilliseconds: number;
    day: Date;
    _bookingDeclarationId: string;
}