import { IUser } from './iUser';
import { IProject } from './iProject';
import { ITask } from './iTask';
import { ITimeEntry } from './iTimeEntry'

export interface IStorageData {
    // users: IUser[];
    projects: IProject[];
    tasks: ITask[];
    timeEntries: ITimeEntry[];
}
