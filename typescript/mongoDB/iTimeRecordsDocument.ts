import { IDate } from './../iDate';
import { IDuration } from './../iDuration';

export interface ITimeRecordsDocumentData {
    durationStructure: IDuration;
    dateStructure: IDate;
    descriptionArray: string[];
}

export interface ITimeRecordsDocument extends ITimeRecordsDocumentData {
    _id: string;        
}