<template>
    <div class="header">
        <h1 class="mdc-typography--display3 mdc-typography--adjust-margin">Quotes Added</h1>
        <div class="quote-progress">
            <span class="quote-percent" :style="{width: progress * 10 + '%'}">{{ progress }} / 10 </span>
        </div>
    </div>
</template>

<script>
    import {bus} from '../main'

    export default {
        data() {
            return {
                progress: 0
            }
        },
        created() {
            bus.$on('new-quote', () => {
                if (this.progress < 10) {
                    this.progress++
                }
            })
            bus.$on('remove-quote', () => {
                this.progress--
            })
        }
    }
</script>

<style lang="scss" scoped>
    .quote-progress {
        width: 100%;
        background-color: $mdc-theme-background;
        margin: 0 auto;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        height: 30px;
    }

    .quote-percent {
        background-color: $mdc-theme-primary;
        display: block;
        text-align: center;
        transition: width 0.5s;
        border-radius: 5px;
        height: 30px;
        padding: 5px;
        box-sizing: border-box;
        color: white;
        min-width: 70px;
    }

    h1 {
        color: $mdc-theme-primary;
        font-weight: normal;
    }

    .header {
        width: 100%;
        margin: 30px auto;
    }
</style>