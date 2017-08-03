<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .quote-beautify {
        border: 1px solid $mdc-theme-primary;
        border-radius: 5px;
        box-shadow: 1px 1px 10px $mdc-theme-shadow;
        overflow-wrap: break-word;
        padding: 0 20px;
    }

    .quote-writing {
        font-family: 'Satisfy', cursive;
        font-size: 150%;
        line-height: 200%;
        word-spacing: 5px;
        letter-spacing: 2px;
        text-align: left;
    }
</style>