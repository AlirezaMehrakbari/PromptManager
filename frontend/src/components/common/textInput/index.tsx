import React from 'react';
import {ITextInputProps} from "@/components/common/textInput/_types/ITextInputProps";

const TextInput: React.FC<ITextInputProps> = ({
                                                  startAdornment,
                                                  endAdornment,
                                                  placeholder,
                                                  title,
                                                  helperText,
                                                  onChange,
                                                  value,
                                                  error,
                                                  type,
                                                  onBlur,
                                                  required,
                                                  disabled,
                                                  forceRTL,
                                                  onFocus,
                                                  readOnly,
                                                  ref,
                                                  className,
                                              }) => {
    return (
        <div className="flex flex-col items-start w-full mx-auto">
            {/* Label */}
            {
                title &&
                <label className={`mb-2 font-medium text-xs ${disabled && 'text-disabled'}`}>
                    {title} {required && <span className="text-primary">*</span>}
                </label>
            }

            <div className="relative w-full">
                {/* Left Icon */}
                {startAdornment && (
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {startAdornment}
        </span>
                )
                }
                {/* Input */}
                <input
                    type={type ?? 'text'}
                    id="text-input"
                    placeholder={placeholder}
                    dir={forceRTL ? 'rtl' : 'ltr'}
                    className={`w-full border-[2px] border-[#E8E8E8] rounded-lg bg-[#FAFAFF] text-sm px-[10px] py-[14px] ${endAdornment && 'pr-10'} ${startAdornment && 'pl-10'} ${forceRTL && '!text-right'} focus:outline-none focus:text-[#181D27] focus:border-primary text-left text-disabled font-medium disabled:opacity-60 ${error ? 'border-error focus:border-error' : 'focus:border-primary-500'} ${className}`}
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                    disabled={disabled}
                    onFocus={onFocus}
                    readOnly={readOnly}
                    ref={ref}
                />

                {/* Right Icon */}
                {
                    endAdornment && (
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
         {endAdornment}
        </span>

                    )
                }
            </div>

            {/* Helper Text */}
            {
                helperText &&
                <p className={`mt-2 text-xs ${error ? 'text-error' : 'text-[#717680]'} ${disabled && 'text-disabled'}`}>{helperText}</p>
            }
        </div>
    )

};

export default TextInput;