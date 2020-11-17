import { IPause } from './iPause';

export interface ITimeEntry {
    timeEntryId: string;
    _taskId: string;
    startTime: Date;
    endTime: Date;
    durationInMilliseconds: number;
    pauses: Array<IPause>;
    day: Date;
    _bookingDeclarationId: string;
}