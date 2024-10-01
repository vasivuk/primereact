const theme = ({ dt }) => `
* {
    box-sizing: border-box;
}

/* Non react overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
}

/* React based overlay animations */
.p-connected-overlay-enter {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-enter-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-enter-done {
    transform: none;
}

.p-connected-overlay-exit {
    opacity: 1;
}

.p-connected-overlay-exit-active {
    opacity: 0;
    transition: opacity .1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter {
    max-height: 0;
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
}

.p-toggleable-content-enter-done {
    transform: none;
}

.p-toggleable-content-exit {
    max-height: 1000px;
}

.p-toggleable-content-exit-active {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${dt('disabled.opacity')};
}

.pi {
    font-size: ${dt('icon.size')};
}

.p-icon {
    width: ${dt('icon.size')};
    height: ${dt('icon.size')};
}

.p-overlay-mask {
    background: ${dt('mask.background')};
    color: ${dt('mask.color')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${dt('mask.transition.duration')} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${dt('mask.transition.duration')} forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${dt('mask.background')};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${dt('mask.background')};
    }
    to {
        background: transparent;
    }
}
`;

const css = ({ dt }) => `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${dt('scrollbar.width')};
}
`;

const classes = {};

const inlineStyles = {};

export const style = {
    name: 'base',
    css,
    theme,
    classes,
    inlineStyles
};