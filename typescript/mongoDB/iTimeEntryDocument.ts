import { ITimeEntry } from "../iTimeEntry";

export interface ITimeEntryDocument extends ITimeEntry {
    _id: string;
    isDisabledInBooking: boolean;
    isDisabledInCommit: boolean;
}