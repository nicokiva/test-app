import { KeyboardEventHandler, useRef } from "react";

interface IUseInputProps {
  type: "text" | "number";
}

interface IUseInputResult {
  state: {
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
  };
  actions: {
    onContainerClick: () => void;
    onInputKeyDown: KeyboardEventHandler<HTMLInputElement>;
  };
}

const useInput = ({ type }: IUseInputProps): IUseInputResult => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleContainerClick = () => {
    if (!ref || !ref.current) {
      return;
    }

    ref.current.focus();
  };

  const handleInputKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "text") {
      return;
    }

    /*
    Key "e" is allowed even in input number but we do not need it,
    so if the user types it, we discard it.
    */
    if (Number.isNaN(Number(evt.key))) {
      evt.preventDefault();
    }
  };

  return {
    state: {
      inputRef: ref,
    },
    actions: {
      onContainerClick: handleContainerClick,
      onInputKeyDown: handleInputKeyDown,
    },
  };
};

export default useInput;
