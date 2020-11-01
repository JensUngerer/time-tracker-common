export interface ITaskLine {
    taskNumber: string;
    taskNumberUrl: string;
    taskDescription: string;
    durationInHours: number;
    durationFraction: number;
}

export interface ISummarizedTasks {
    _timeEntryIds: string[];
    category: string;
    lines: ITaskLine[];
    durationSum: number;
    durationFraction: number;
}
