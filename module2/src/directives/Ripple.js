import {ripple as mdcRipple} from 'material-components-web'

const {MDCRipple} = mdcRipple;

export default {
    bind (el, context) {
        if (!context.modifiers.custom) {
            el.classList.add('mdc-ripple-surface');
        }
        el.mdc_ripple_ = MDCRipple.attachTo(el, { isUnbounded: context.modifiers.unbounded });
    },
    unbind (el, context) {
        if (!el.mdc_ripple_) {
            return;
        }
        el.mdc_ripple_.destroy();
        delete el.mdc_ripple_;
    }
}