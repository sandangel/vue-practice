<template>
    <aside id="my-mdc-dialog"
           class="mdc-dialog"
           role="alertdialog"
           aria-labelledby="my-mdc-dialog-label"
           aria-describedby="my-mdc-dialog-description">
        <div class="mdc-dialog__surface" ref="surface">
            <header class="mdc-dialog__header">
                <h2 id="my-mdc-dialog-label" class="mdc-dialog__header__title">
                    Use too many Quotes?
                </h2>
            </header>
            <section id="my-mdc-dialog-description" class="mdc-dialog__body">
                Let click on some quote to delete it before adding more!.
            </section>
            <footer class="mdc-dialog__footer">
                <button type="button"
                        class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept" ref="accept"
                        v-ripple
                >I have understanded</button>
            </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
    </aside>
</template>

<script>
    import Ripple from '../directives/Ripple'

    import {dialog as mdcDialog} from 'material-components-web'

    const  {MDCDialog, MDCDialogFoundation, util} = mdcDialog;

    export default {
        data() {
            return {
                foundation: null
            }
        },
        directives: {
            Ripple
        },
        mounted() {
            this.focusTrap_ = util.createFocusTrapInstance(this.$refs.surface, this.$refs.accept);
            let vm = this;
            this.foundation = new MDCDialogFoundation({
                addClass: (className) => vm.$el.classList.add(className),
                removeClass: (className) => vm.$el.classList.remove(className),
                addBodyClass: (className) => document.body.classList.add(className),
                removeBodyClass: (className) => document.body.classList.remove(className),
                eventTargetHasClass: (target, className) => target.classList.contains(className),
                registerInteractionHandler: (evt, handler) => vm.$el.addEventListener(evt, handler),
                deregisterInteractionHandler: (evt, handler) => vm.$el.removeEventListener(evt, handler),
                registerSurfaceInteractionHandler: (evt, handler) => vm.$refs.surface.addEventListener(evt, handler),
                deregisterSurfaceInteractionHandler: (evt, handler) => vm.$refs.surface.removeEventListener(evt, handler),
                registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
                deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
                registerTransitionEndHandler: (handler) => vm.$refs.surface.addEventListener('transitionend', handler),
                deregisterTransitionEndHandler: (handler) => vm.$refs.surface.removeEventListener('transitionend', handler),
                notifyAccept: () => vm.$emit('accepted'),
                notifyCancel: () => vm.$emit('canceled'),
                isDialog: (el) => el === vm.$refs.surface,
                trapFocusOnSurface: () => vm.focusTrap_.activate(),
                untrapFocusOnSurface: () => vm.focusTrap_.deactivate(),
            })
            this.foundation.init()
        },
        methods: {
            open () {
                this.foundation.open()
            },
            close () {
                this.foundation.close()
            },
        }
    }
</script>

<style>

</style>