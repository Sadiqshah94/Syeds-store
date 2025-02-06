import { Input } from "../input";
import { Label } from "../label";
import { clsx } from "clsx"; // Importing the classnames utility

interface InputFieldProps {
  label?: string;
  labelCaption?: string;
  numbers?: number;
  size?: any;
  multiline?: boolean;
  disabled?: boolean;
  name?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "tel"
    | "number"
    | "date"
    | "checkbox"
    |"url"
    | "file"
    | "range"
    | "color"
    | "radio"
    | "radio";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: any;
  value?: any;
  options?: { label: string; value: string }[];
  maxRows?: number;
  id?: string;
  error?: any;
  helperText?: any;
  isPassword?: boolean;
  isInputWithIcon?: boolean;
  autoComplete?: string;
  onClick?: () => void;
  required?: true | false;
  className?: any;
  accept?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  accept,
  id,
  type = "text",
  autoComplete = "off",
  value,
  onChange,
  options,
  numbers,
  onBlur,
  isPassword,
  isInputWithIcon,
  multiline = false,
  disabled = false,
  error,
  helperText,
  onClick,
  required,
  name,
  className,
  ...props
}) => {

  return (
    <>
      <Label
        htmlFor={id}
        className={clsx("text-gray-700 font-semibold mb-2", {
          "text-red-500": error, 
        })}
      >
        {label}
      </Label>
      
      <Input
      accept={accept}
        id={id}
        disabled={disabled}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        name={name}
        className={clsx("small", className, {
          "border-red-500": error, 
          "text-red-500": error,  
          "focus:ring-red-500": error, 
        })}
        size="small"
        {...props}
      />
      
      {error && helperText && (
        <p className="text-sm text-red-500 mt-1">{helperText}</p>
      )}
    </>
  );
};

export { InputField };
