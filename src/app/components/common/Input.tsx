'use client';

import { INPUT_STYLE } from '@/app/constants/styles';

interface InputProps {
  type: keyof typeof INPUT_STYLE;
  textValue?: string | number;
  inputType?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'file'
    | 'checkbox'
    | 'radio'
    | 'date';
  name?: string;
  placeholder?: string;
  className?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
  isDisabled?: boolean;
  pattern?: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  name,
  textValue,
  placeholder,
  className,
  inputType = 'text',
  accept,
  onFocus,
  onBlur,
  onKeyDown,
  onEnterPress,
  onChange,
  isDisabled,
  pattern,
  min,
  max,
  maxLength,
  onClick,
}: InputProps) {
  const inputStyles = INPUT_STYLE[type](className || '');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onEnterPress && e.key === 'Enter') {
      onEnterPress();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  return (
    <input
      type={inputType}
      value={textValue}
      placeholder={placeholder}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      onChange={onChange}
      className={inputStyles}
      accept={accept}
      disabled={isDisabled}
      pattern={pattern}
      min={min}
      max={max}
      maxLength={maxLength}
      onClick={onClick}
    />
  );
}

export default Input;
