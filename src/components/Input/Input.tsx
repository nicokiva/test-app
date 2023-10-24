import styled from "styled-components";
import useInput from "./useInput";
import { ChangeEventHandler } from "react";

const InputContainer = styled.div<{ error: boolean }>`
  position: relative;
  border: solid 1px;
  height: 30px;
  padding: 10px;

  border-color: ${({ error }) => (error ? "red" : "black")};
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #777;
  transform-origin: 0 0;
  transition: transform 0.2s, font-size 0.2s, color 0.2s;
  font-size: 16px;
`;

const RawInput = styled.input`
  border: 0;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
    & + ${Label} {
      transform: translateY(-45px) translateX(-10px) scale(0.8);
      color: black;
      font-weight: bolder;
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

interface IInputProps {
  id: string;
  type?: "text" | "number";
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
}

const Input = ({
  type = "text",
  label,
  id,
  onChange,
  errorMessage,
}: IInputProps): JSX.Element => {
  const {
    state: { inputRef },
    actions: { onContainerClick, onInputKeyDown },
  } = useInput({ type });

  return (
    <div>
      <InputContainer onClick={onContainerClick} error={!!errorMessage}>
        <RawInput
          ref={inputRef}
          type={type}
          id={id}
          onKeyDown={onInputKeyDown}
          onChange={onChange}
        />

        <Label htmlFor={id}>{label}</Label>
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default Input;
