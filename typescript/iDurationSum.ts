import { ICommit } from './iCommit';

export interface IDurationSum {
    day: Date; // only for visualization purposes
    durations: ICommit[];
}