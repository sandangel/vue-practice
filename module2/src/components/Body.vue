<template>
    <div class="quote-body">
        <label for="css-only-multiline">Quote: </label>
        <div class="mdc-textfield mdc-textfield--multiline">
            <textarea v-model="quote" class="mdc-textfield__input" id="css-only-multiline" rows="5" cols="50"
                      placeholder="Enter beautiful quote here." ref="quote"></textarea>
        </div>

        <button @click="addQuote" class="mdc-button mdc-button--raised mdc-button--accent" v-ripple>
            Add Quote
        </button>

        <div class="mdc-layout-grid">
            <quote class="mdc-layout-grid__inner">
                <div v-for="(q, i) in quotes" class="mdc-layout-grid__cell quote-beautify" :key="q"
                     @click="removeQuote(i)">
                    <p class="quote-writing">{{ q }}</p>
                </div>
            </quote>
        </div>

    </div>
</template>

<script>
    import Quote from './Quote.vue'

    import {bus} from '../main'

    import Ripple from '../directives/Ripple'

    export default {
        data() {
            return {
                quote: '',
                quotes: []
            }
        },
        methods: {
            addQuote() {
                if (this.quotes.length < 10 && this.quote !== '') {
                    bus.$emit('new-quote');
                    this.quotes.unshift(this.quote);
                    this.quote = ''
                } else if (this.quotes.length === 10) {
                    bus.$emit('quote-limit')
                }
            },
            removeQuote(i) {
                bus.$emit('remove-quote');
                this.quotes.splice(i, 1)
            }
        },
        components: {
            Quote
        },
        directives: {
            Ripple
        }
    }

</script>

<style lang="scss" scoped>
    .quote-body {
        text-align: center;

        label {
            font-size: 150%;
            color: $mdc-theme-accent;
        }

        button {
            @include mdc-ripple-base;
            @include mdc-ripple-bg((pseudo: "::before"));
            @include mdc-ripple-fg((pseudo: "::after"));
            overflow: hidden;
        }
    }

    .mdc-textfield__input {
        margin: 50px auto;
    }
</style>
