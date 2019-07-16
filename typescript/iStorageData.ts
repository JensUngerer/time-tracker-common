import { IUser } from './iUser';
import { IProject } from './iProject';

export interface IStorageData {
    users: IUser[];
    projects: IProject[];
}
