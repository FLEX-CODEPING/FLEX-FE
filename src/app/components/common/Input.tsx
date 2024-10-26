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

  return (
    <input
      type={inputType}
      value={textValue}
      placeholder={placeholder}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={(e) => e.key === 'Enter' && onEnterPress && onEnterPress()}
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
