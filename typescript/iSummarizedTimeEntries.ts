export interface ISummarizedTimeEntries {
    taskCategory: string;
    overallDurationSum: number;
    overallDurationSumFraction: number;
    durationSumByTaskId: { [taskId: string]: number };
    durationSumFractionByTaskId: { [taskId: string]: number };
    _timeEntryIds: string[];
}
