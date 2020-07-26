import { IBookingDeclaration } from "./iBookingDeclaration";
import { ITask } from "./iTask";

export interface ICommitBase {
    basis: IBookingDeclaration | ITask,
    durationInHours: number;
    durationSumInMilliseconds: number;
    _timeEntryIds: string[];
}