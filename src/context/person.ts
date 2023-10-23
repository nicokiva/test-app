export interface IPerson {
  name?: string;
  lastName?: string;
  age?: number;
  country?: string;
  hobbies?: string;
  languages?: string;
}

export type PersonContextType = {
  person: IPerson | null;
  changePerson: (person: IPerson) => void;
};
