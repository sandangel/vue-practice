<template>
    <div class="form-group">
        <label>First Name:
            <input :value="firstName" class="form-control" @input="onInput($event.target.value, $refs.first)" ref="first">
        </label>
        <label>Last Name:
            <input :value="lastName" class="form-control" @input="onInput($event.target.value, $refs.second)" ref="second">
        </label>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        computed: {
            firstName() {
                return this.value.split(' ')[0]
            },
            lastName() {
                let name = ''
                let last = this.value.split(' ').slice(1)
                last.forEach(word => name === '' ? name = word : name += ' ' + word)
                return name
            }
        },
        methods: {
            onInput(value, input) {
                if (input === this.$refs.first) {
                    this.$emit('input', value + ' ' + this.lastName)
                } else if (input === this.$refs.second) {
                    this.$emit('input', this.firstName + ' ' + value)
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
</style>