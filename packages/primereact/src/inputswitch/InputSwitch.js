import { Component, ComponentProvider } from '@primereact/core/component';
import { useMountEffect } from '@primereact/hooks';
import { Tooltip } from 'primereact/tooltip';
import * as React from 'react';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { useInputSwitch } from './InputSwitch.base';
import { InputSwitchBase } from './InputSwitchBase';

export const InputSwitch = React.memo(
    React.forwardRef((inProps, inRef) => {
        const inputswitch = useInputSwitch(inProps, inRef);
        const {
            props,
            state,
            ptm,
            ptmi,
            cx,
            id,
            // element refs
            elementRef,
            focusInputRef,
            clearIconRef,
            // methods
            onFocus,
            onBlur,
            onKeyDown,
            onEditableInput,
            onContainerClick,
            onClearClick,
            // computed
            selectedOption,
            label: labelText,
            editableInputValue,
            focusedOptionId,
            isClearIconVisible,
            ptm,
            ptmi,
            cx,
            ref
        } = inputswitch;

        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const checked = props.checked === props.trueValue;

        const onChange = (event) => {
            if (props.onChange) {
                const value = checked ? props.falseValue : props.trueValue;

                props.onChange({
                    originalEvent: event,
                    value,
                    stopPropagation: () => {
                        event?.stopPropagation();
                    },
                    preventDefault: () => {
                        event?.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
            }
        };

        const onFocus = (event) => {
            props?.onFocus?.(event);
        };

        const onBlur = (event) => {
            props?.onBlur?.(event);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }
        });

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = InputSwitchBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root', { checked })),
                style: props.style,
                role: 'checkbox',
                'aria-checked': checked,
                'data-p-highlight': checked,
                'data-p-disabled': props.disabled
            },
            otherProps,
            ptm('root')
        );

        const inputProps = mergeProps(
            {
                type: 'checkbox',
                id: props.inputId,
                name: props.name,
                checked: checked,
                onChange: onChange,
                onFocus: onFocus,
                onBlur: onBlur,
                disabled: props.disabled,
                role: 'switch',
                tabIndex: props.tabIndex,
                'aria-checked': checked,
                className: cx('input'),
                ...ariaProps
            },
            ptm('input')
        );

        const sliderProps = mergeProps(
            {
                className: cx('slider')
            },
            ptm('slider')
        );

        return (
            <ComponentProvider pIf={props.pIf} value={inputswitch}>
                <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                    <input ref={inputRef} {...inputProps} />
                    <span {...sliderProps} />
                </Component>
                <Tooltip pIf={isNotEmpty(props.tooltip)} target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />
            </ComponentProvider>
        );
    })
);

InputSwitch.displayName = 'InputSwitch';