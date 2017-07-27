<template>
  <div id="app">
        <app-header></app-header>
        <app-body class="quote-body"></app-body>
        <app-footer class="note">
            <p>
                Info: Click on Quote to delete it!
            </p>
        </app-footer>
  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Body from './components/Body.vue'
    
    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
            appBody: Body
        }      
    }
</script>

<style lang="scss">
    #app {
        max-width: 1140px;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
</style>
