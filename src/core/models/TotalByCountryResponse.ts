// Generated by https://quicktype.io

export interface TotalByCountryResponse {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
  Comment: Comment;
}

export enum Comment {
  Empty = '',
  NoReliableSourceToProvideRecoveredData = 'no reliable source to provide recovered data',
}
