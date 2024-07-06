export interface IItem {
  id: string;
  userID: string;
  url: string;
  title: string;
  executionTimestamp: {
    seconds: number;
    nanoseconds: number;
  };
  body: IItemBody;
  header: IItemHeader;
  response: IItemResponse;
}

interface IItemHeader {}
interface IItemBody {}
interface IItemResponse {}
