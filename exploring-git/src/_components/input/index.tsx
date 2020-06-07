import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleBlur = useCallback(() => {
    setFocused(false);

    if (inputRef.current?.value) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Container isFilled={isFilled} isFocused={isFocused}>
        <input
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error}
      </Container>
    </>
  );
};

export default Input;

/**
 *   iterface InputProps param give us access to HTML input params.
 *    on input repass all props ex {...props}
 *
 *    using IconBaseProps I cab access all proops of a componebnt
 */
