import { IDate } from './iDate';
import { IDuration } from './iDuration';

export interface IGridCommitLine {
    description: string;
    descriptionArr: string[];
    durationStructure: IDuration;
    dateStructure: IDate;
    durationStr: string;
    startTime: Date;
    endTime: Date;
  }