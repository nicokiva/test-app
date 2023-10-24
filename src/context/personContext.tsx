import { createContext, useState, useContext, PropsWithChildren } from "react";
import { IPerson, PersonContextType } from "./person";

const PersonContext = createContext<PersonContextType>({
  changePerson: () => {},
  person: null,
});

export const PersonProvider = ({ children }: PropsWithChildren<{}>) => {
  const [person, setPerson] = useState<IPerson | null>(null);

  return (
    <PersonContext.Provider value={{ person, changePerson: setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

export const usePerson = () => {
  return useContext(PersonContext);
};
