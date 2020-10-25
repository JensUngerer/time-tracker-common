import { ISummarizedTimeEntries } from "./iSummarizedTimeEntries";

export interface ITimeSummary { [groupCategory: string]: { [taskCategory: string]: ISummarizedTimeEntries } }