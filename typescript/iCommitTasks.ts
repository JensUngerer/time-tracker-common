
import  {ITask} from './iTask';

export interface ICommitTask { 
    task: ITask;
    durationInHours: number;
    durationSumInMilliseconds: number;
    _timeEntryIds: string[];
}