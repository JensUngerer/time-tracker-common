import { IBookingDeclaration } from './iBookingDeclaration';
import { ICommitBase as ICommitSumBase } from './iCommitBase';

export interface ICommit extends ICommitSumBase {
    basis: IBookingDeclaration;
}
