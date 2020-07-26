import { ICommitTask } from "./iCommitTasks";
import { IDurationSumBase } from "./iDurationSumBase";

export interface ITasksDurationSum extends IDurationSumBase {
    durations: ICommitTask[];
}