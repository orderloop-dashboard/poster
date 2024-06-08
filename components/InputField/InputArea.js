import { useEffect, useState } from "react";

export const InputArea = (props) => {
    const {
        label,
        labelMarginB,
        labelStyle,
        type,
        disabled,
        placeholder,
        paddingT,
        boxPaddingB,
        boxHeight,
        resizeNone,
        shadow,
        addon,
        addonIcon,
        placeholderIcon,
        helperText,
        onChange,
    } = props;

    const [inputValue, setInputValue] = useState(props.inputValue ?? "");

    const handleChangeInputValue = (value) => {
        setInputValue(value);
        onChange?.(value);
    };

    useEffect(() => {
        setInputValue(props.inputValue ?? "");
    }, [props.inputValue]);

    return (
        <>
            <div className="w-full">
                {label && (
                    <div className={`flex flex-row justify-between w-full ${labelMarginB ?? "mb-2"}`}>
                        <label
                            className={`${labelStyle ?? (type === "offer" || type === "storeSetting" ? "paragraph-medium-italic" : "paragraph-small-medium")} ${
                                disabled && "text-neutral-300"
                            } `}
                        >
                            {label}
                        </label>
                    </div>
                )}

                <div className="relative">
                    <textarea
                        value={inputValue}
                        disabled={disabled}
                        type="text"
                        onChange={(e) => handleChangeInputValue(e.target.value)}
                        placeholder={placeholder}
                        className={`${paddingT ?? "pt-3"} px-4 ${!boxPaddingB ? "pb-3" : boxPaddingB} ${
                            boxHeight ?? "h-28"
                        } ${resizeNone} ${shadow} w-full border disabled:bg-white disabled:cursor-not-allowed rounded-md block border-neutral-300 pl-4 placeholder:text-neutral-300 focus:border-primary-500 outline-none focus:outline-none focus:ring-4 focus:ring-primary-100 caret-primary-500 paragraph-small-regular`}
                    />

                    <div className="flex flex-row absolute right-4 top-3">
                        <span className="text-neutral-300 paragraph-small-regular">{addon}</span>
                        {addonIcon && <div className="h-6 w-6 ml-1 rounded">{addonIcon}</div>}
                    </div>

                    {placeholderIcon && <div className="h-6 w-6 rounded absolute top-3 left-4">{placeholderIcon}</div>}
                </div>
                {helperText && <p className="w-full pt-2 text-neutral-500 paragraph-small-regular group-disabled:text-neutral-300">{helperText}</p>}
            </div>
        </>
    );
};
