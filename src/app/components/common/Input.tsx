'use client';

import { INPUT_STYLE } from '@/app/constants/styles';

interface InputProps {
  type: keyof typeof INPUT_STYLE;
  textValue?: string | number;
  inputType?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onEnterPress?: () => void;
  isDisabled?: boolean;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  onClick?: () => void;
}

function Input({
  type,
  name,
  textValue,
  placeholder,
  className,
  inputType,
  accept,
  onFocus,
  onBlur,
  onEnterPress,
  onChange,
  isDisabled,
  min,
  max,
  maxLength,
  onClick,
}: InputProps) {
  const buttonStyles = INPUT_STYLE[type](className || '');

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
      className={buttonStyles}
      accept={accept}
      disabled={isDisabled}
      min={min}
      max={max}
      maxLength={maxLength}
      onClick={onClick}
    />
  );
}

export default Input;
