import { IDate } from './../iDate';
import { IDuration } from './../iDuration';

export interface ITimeRecordsDocument {
    _id: string;
    durationStructure: IDuration;
    dateStructure: IDate;
    descriptionArray: string[];    
}