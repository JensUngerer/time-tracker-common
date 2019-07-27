import { IDate } from './../iDate';
import { IDuration } from './../iDuration';

// export interface IExtendedTimeRecordsDocumentData {
//     data: ITimeRecordsDocumentData;
//     timeEntryIds: string[];    
// }

export interface ITimeRecordsDocumentData {
    durationStructure: IDuration;
    dateStructure: IDate;
    // _taskIds: string[];
    // _projectId: string;
    _timeEntryIds: string[];
}

export interface ITimeRecordsDocument extends ITimeRecordsDocumentData {
    _id: string;
}