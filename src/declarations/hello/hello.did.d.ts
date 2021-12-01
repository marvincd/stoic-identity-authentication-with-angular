import type { Principal } from '@dfinity/principal';
export type Balance = number;
export type Desc = string;
export interface Entry {
  'descript' : Desc,
  'userName' : Name__1,
  'token' : Balance,
  'userRating' : UserRating,
}
export type ID = string;
export type Name = string;
export type Name__1 = string;
export interface SubmitInfo {
  'userName' : string,
  'essayTitle' : string,
  'essayTopic' : string,
  'wordCount' : string,
  'userId' : string,
  'payTokens' : bigint,
  'userEdu' : string,
  'reviewTimes' : bigint,
  'essayID' : number,
}
export type UserRating = number;
export interface _SERVICE {
  'createEssayInfo' : (arg_0: ID, arg_1: SubmitInfo) => Promise<undefined>,
  'createProfile' : (arg_0: Name, arg_1: Entry) => Promise<undefined>,
  'getEssayInfo' : (arg_0: ID) => Promise<[] | [SubmitInfo]>,
  'getProfile' : (arg_0: Name) => Promise<[] | [Entry]>,
  'whoami' : () => Promise<Principal>,
  'whoami1' : () => Promise<Principal>,
}
