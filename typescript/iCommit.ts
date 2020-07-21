import { IBookingDeclaration } from './iBookingDeclaration';

export interface ICommit  {
    // endTime: Date;
    // bookingDeclarationId: string;
    booking: IBookingDeclaration;
    durationInHours: number;
    durationSumInMilliseconds: number;
}
