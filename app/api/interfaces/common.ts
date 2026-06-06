export type UUID = string;
export type ISOTimestamp = string;

export type ApiListResponse<T> = {
  data: T[];
};

export type ApiShowResponse<T> = {
  data: T;
};
