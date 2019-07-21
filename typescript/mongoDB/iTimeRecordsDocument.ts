import { IDate } from './../iDate';
import { IDuration } from './../iDuration';

export interface ITimeRecordsDocumentData {
    durationStructure: IDuration;
    dateStructure: IDate;
    _taskIds: string[];
    _projectId: string;
}

export interface ITimeRecordsDocument extends ITimeRecordsDocumentData {
    _id: string;        
}