import DownArrowIcon from "@/assets/chevron-down.svg";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import _ from "lodash";

export default function Dropdown(props) {
    const {
        disabled,
        openFromBottom,
        fixedHeight,
        itemsStyle,
        placeholder,
        selectedItem,
        menuItems = [],
        labelStyle,
        labelPaddingB,
        label,
        icon,
        hasFixedPlaceholder,
        shadow = "shadow-Xsmall",
        boxPadding = "px-4",
        height = "h-12",
        selectedItemStyle = "paragraph-small-regular",
    } = props;

    const selection = !_.isEmpty(selectedItem) ? selectedItem : placeholder ? { label: placeholder } : menuItems[0];

    const [selected, setSelected] = useState(selection);

    const defaultListBoxStyle =
        "w-full bg-white flex flex-row items-center justify-between mobile:max-w-full rounded-md outline-none border py-3 appearance-none border-neutral-300";

    const onChange = (selection) => {
        props?.setSelected?.(selection);

        if (hasFixedPlaceholder) return;

        setSelected(selection);
    };

    useEffect(() => {
        if (hasFixedPlaceholder) {
            return;
        }

        selection && setSelected(selection);

        // eslint-disable-next-line
    }, [selectedItem]);

    useEffect(() => {
        const newPlaceholder = !_.isEmpty(selectedItem) ? selectedItem : placeholder && { label: placeholder };
        setSelected(newPlaceholder);
    }, [placeholder]);

    return (
        <>
            {label && <div className={`${labelStyle ?? "paragraph-small-medium"} ${labelPaddingB ?? "pb-1"} ${disabled && "text-neutral-300"}`}>{label}</div>}

            <Listbox value={selectedItem ?? selected} onChange={onChange} disabled={disabled}>
                <div className="relative">
                    <Listbox.Button className={`${defaultListBoxStyle} ${height} ${shadow} ${boxPadding} ${selectedItemStyle}`}>
                        <span
                            className={`truncate pr-0.5 ${icon && "flex flex-row items-center"} ${
                                !!placeholder && selected.label === placeholder ? "text-neutral-300" : "text-neutral-900"
                            }`}
                        >
                            {icon && <span className="mr-2">{icon}</span>}

                            {selected?.label}
                        </span>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <DownArrowIcon height={24} width={24} fill={disabled ? "#D3D2D8" : "#131126"} />
                        </span>
                    </Listbox.Button>

                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Listbox.Options
                            className={`absolute left-0 bg-white right-0 mt-2 px-4 py-2 border paragraph-small-medium rounded-md shadow-medium bg-shades-50 font-normal z-50 outline-none ${
                                openFromBottom && "bottom-full mb-2"
                            } ${fixedHeight && fixedHeight + " overflow-auto scrollbar-style"}`}
                        >
                            {!menuItems.length ? (
                                <div className="relative cursor-default select-none px-1 py-2 paragraph-small-regular text-neutral-700">No more items.</div>
                            ) : (
                                menuItems?.map((el, index) => (
                                    <Listbox.Option
                                        key={index}
                                        disabled={el.disabled}
                                        className={({ active, disabled }) =>
                                            `paragraph-small-regular ml-1 pt-2 mb-2 ${disabled && "text-neutral-300 cursor-not-allowed"} ${
                                                active && "text-primary-500 cursor-pointer active:paragraph-small-semi-bold active:text-primary-500"
                                            } ${itemsStyle}`
                                        }
                                        value={el}
                                    >
                                        {el.label}
                                    </Listbox.Option>
                                ))
                            )}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </>
    );
}
