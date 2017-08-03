<template>
    <div class="note">
        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .note {
        width: 100%;
        height: 50px;
        border: 1px solid $mdc-theme-primary;
        border-radius: 5px;
        margin: 30px auto;
        text-align: center;
        background-color: $mdc-theme-background;
        color: $mdc-theme-primary;
        box-shadow: 1px 1px 10px $mdc-theme-shadow;
    }
</style>
