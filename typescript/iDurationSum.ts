import { ICommit } from './iCommit';
import { IDurationSumBase } from './iDurationSumBase';

export interface IDurationSum extends IDurationSumBase {
    durations: ICommit[];
}