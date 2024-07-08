export function dummyFunction(anything: string) {
  return `Dummy function called with ${anything}`;
}

export interface IName {
  forename: string;
  surname: number;
}

export function getFullName(name: IName) {
  return `${name.forename} ${name.surname}`;
}
