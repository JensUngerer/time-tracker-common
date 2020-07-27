import { ITask } from '../iTask';

export interface ITasksDocument extends ITask {
    _id: string;
    isDisabled: boolean;
}