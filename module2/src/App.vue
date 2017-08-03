<template>
    <div id="app">
        <app-header></app-header>
        <app-body></app-body>
        <app-footer>
            <p>
                Info: Click on Quote to delete it!
            </p>
        </app-footer>
        <app-dialog ref="dialog"></app-dialog>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Body from './components/Body.vue'
import Dialog from './components/Dialog.vue'
import {bus} from './main'

export default {
    components: {
        appHeader: Header,
        appFooter: Footer,
        appBody: Body,
        appDialog: Dialog
    },
    created() {
        bus.$on('quote-limit', () => {
           this.$refs.dialog.open();
        })
    }
}
</script>

<style lang="scss">
#app {
    max-width: 1140px;
    margin: 0 auto;
    border: 0;
    box-sizing: border-box;
}
</style>
