import { IPause } from './iPause';

export interface ITimeEntry {
    timeEntryId: string;
    _taskId: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    pauses: Array<IPause>
}