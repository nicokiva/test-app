import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { usePerson } from "../../context/personContext";
import { IPerson } from "../../context/person";

interface IUseMainFormResult {
  actions: {
    onFormSubmit: FormEventHandler<HTMLFormElement>;

    onInputChange: ChangeEventHandler<HTMLInputElement>;
  };
}

const useMainForm = (): IUseMainFormResult => {
  //   const { changePerson, person } = usePerson();
  const [currentPerson, setCurrentPerson] = useState<IPerson | null>(null);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value = "", id } = target;
    if (!value) {
      return;
    }

    setCurrentPerson({ ...currentPerson, [id]: value });
  };

  const onFormSubmit = (evt: FormEvent) => {
    console.log(1);
    evt.preventDefault();
  };

  return {
    actions: {
      onFormSubmit,
      onInputChange,
    },
  };
};

export default useMainForm;
