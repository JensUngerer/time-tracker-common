
import  {ITask} from './iTask';
import { ICommitBase } from './iCommitBase';

export interface ICommitTask extends ICommitBase { 
    basis: ITask;
}