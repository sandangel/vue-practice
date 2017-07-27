<template>
    <div>
        <textarea cols="50" rows="5" ref="quote" :value=""></textarea>
        <button @click="addQuote">Add Quote</button>
    </div>
</template>

<script>
    export default {
        methods: {
            addQuote() {
                console.log(this.$refs.quote.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    textarea {
        outline: none;
        display: block;
        margin: 20px auto;
    }
    
    .quote-body {
        margin: 20px auto;
        text-align: center;
    }
</style>