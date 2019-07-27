import { IProject } from './iProject';
import { ITask } from './iTask';

export interface IStorageData {
    projects: IProject[];
    tasks: ITask[];
    // timeEntries: ITimeEntry[];
}
