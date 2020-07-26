import { ICommitTask } from "./iCommitTasks";

export interface ITasksDurationSum {
    day: Date; // only for visualization purposes
    durations: ICommitTask[];
}