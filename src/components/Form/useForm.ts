import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { usePerson } from "../../context/personContext";
import { IPerson } from "../../context/person";
import { SelectChangeEvent } from "@mui/material";

interface IUseFormResult {
  state: {
    countries: Array<{ id: string; label: string }>;
    errors: { [key in keyof IPerson]: boolean };
    person: IPerson | null;
  };
  actions: {
    onFormSubmit: FormEventHandler<HTMLFormElement>;

    onInputChange: ChangeEventHandler<HTMLInputElement>;
    onSelectChange: (event: SelectChangeEvent<HTMLSelectElement>) => void;
  };
}

const useForm = (): IUseFormResult => {
  const { changePerson } = usePerson();

  const [errors, setErrors] = useState<{ [key in keyof IPerson]: boolean }>({
    name: false,
    lastName: false,
    age: false,
    country: false,
  });

  const [countries, setCountries] = useState<
    IUseFormResult["state"]["countries"]
  >([]);

  useEffect(() => {
    setCountries([
      { id: "ar", label: "Argentina" },
      { id: "br", label: "Brasil" },
      { id: "ca", label: "Canada" },
      { id: "us", label: "USA" },
    ]);
  }, []);

  const [currentPerson, setCurrentPerson] = useState<IPerson | null>(null);
  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value = "", id } = target;

    setCurrentPerson({ ...currentPerson, [id]: value });
  };

  const onSelectChange = ({
    target: { value },
  }: SelectChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((country) => country.id === value);
    if (!country) {
      return;
    }

    setCurrentPerson({ ...currentPerson, country: country.id });
  };

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    let currentErrors: { [key in keyof IPerson]: boolean } = {
      name: false,
      lastName: false,
      age: false,
      country: false,
    };

    if (!currentPerson?.name) {
      currentErrors.name = true;
    }

    if (!currentPerson?.lastName) {
      currentErrors.lastName = true;
    }

    if (!currentPerson?.age || Number(currentPerson?.age) <= 0) {
      currentErrors.age = true;
    }

    if (!currentPerson?.country) {
      currentErrors.country = true;
    }

    setErrors(currentErrors);

    if (!currentPerson || Object.values(currentErrors).some((error) => error)) {
      return;
    }
    changePerson(currentPerson);
  };

  return {
    actions: {
      onFormSubmit,
      onInputChange,
      onSelectChange,
    },
    state: {
      errors,
      countries,
      person: currentPerson,
    },
  };
};

export default useForm;
