import { Duration } from "luxon";

export interface ISummarizedTimeEntries {
    taskCategory: string;
    overallDurationSum: Duration;
    overallDurationSumFraction: number;
    durationSumByTaskId: { [taskId: string]: Duration };
    durationSumFractionByTaskId: { [taskId: string]: Duration };
    _timeEntryIds: string[];
}
