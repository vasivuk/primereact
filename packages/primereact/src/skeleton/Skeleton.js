import { Component, ComponentProvider } from '@primereact/core/component';
import { classNames, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useSkeleton } from './Skeleton.base';

export const Skeleton = React.memo(
    React.forwardRef((inProps, inRef) => {
        const skeleton = useSkeleton(inProps, inRef);
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
            sx,
            ref
        } = skeleton;

        const containerStyle = props.size ? { width: props.size, height: props.size, borderRadius: props.borderRadius } : { width: props.width, height: props.height, borderRadius: props.borderRadius };

        const rootProps = mergeProps(
            {
                ref,
                style: { ...sx('root'), ...containerStyle },
                className: classNames(cx('root'), props.className),
                'aria-hidden': true
            },
            ptmi('root')
        );

        return (
            <ComponentProvider pIf={props.pIf} value={skeleton}>
                <Component as={props.as || 'div'} {...rootProps} ref={elementRef} />
            </ComponentProvider>
        );
    })
);

Skeleton.displayName = 'Skeleton';