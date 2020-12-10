import { IDate } from './../iDate';
// import { IDuration } from './../iDuration';

// export interface IExtendedTimeRecordsDocumentData {
//     data: ITimeRecordsDocumentData;
//     timeEntryIds: string[];    
// }

export interface ITimeRecordsDocumentData {
    // durationStructure: IDuration;
    dateStructure: IDate;
    // _taskIds: string[];
    // _projectId: string;
    // durationInMilliseconds: number; // TODO: re - enable for debugging purposes...
    durationInHours: number;
    durationInMilliseconds: object;
    _timeEntryIds: string[];
    _bookingDeclarationId: string;
    _taskId: string;
    // collectionName: string;
}

export interface ITimeRecordsDocument extends ITimeRecordsDocumentData {
    _id: string;
}