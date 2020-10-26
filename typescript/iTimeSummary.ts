import { ISummarizedTimeEntries } from "./iSummarizedTimeEntries";

export interface ITimeSummary 
{ [taskCategory: string]: ISummarizedTimeEntries }

export interface ITimeSummaryByGroupCategory { [groupCategory: string]: ITimeSummary  }