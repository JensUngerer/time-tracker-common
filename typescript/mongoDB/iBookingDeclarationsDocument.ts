import { IBookingDeclaration } from "../iBookingDeclaration";

export interface IBookingDeclarationsDocument extends IBookingDeclaration {
    _id: string;
    isDisabled: boolean;
}