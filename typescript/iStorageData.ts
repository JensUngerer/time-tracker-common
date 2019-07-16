import { IUser } from './iUser';
import { IProject } from './iProject';
import { ITask } from './iTask';

export interface IStorageData {
    users: IUser[];
    projects: IProject[];
    tasks: ITask[];
}
