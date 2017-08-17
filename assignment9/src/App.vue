<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <full-name v-model="fullName"></full-name>
                    <div class="form-group">
                        <label>Email:
                            <input v-model="email" type="email" class="form-control">
                        </label>
                    </div>
                    <div class="form-group">
                        <label>Password
                            <input v-model="password" type="password" class="form-control">
                        </label>
                    </div>
                    <label class="form-check-label">Store in database? : </label>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" v-model="isStore" type="radio" value="Yes"> Yes
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" v-model="isStore" type="radio" value="No"> No
                        </label>
                    </div>
                    <div class="form-group">
                        <select class="form-control" v-model="selectedOptions" multiple>
                            <option v-for="option in options" :value="option">{{ option }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <i class="material-icons md-18">face</i>
                        <button @click.prevent="isSubmitted = true" class="btn btn-primary">Submit</button>
                        <button @click.prevent="isSubmitted = true" class="mdc-button mdc-button--primary mdc-button--raised">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ isStore }}</p>
                        <p>Selected: {{ selectedOptions }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';

    export default {
        data() {
            return {
                email: '',
                password: '',
                isStore: 'Yes',
                isSubmitted: false,
                fullName: '',
                options: [1, 2, 3, 4, 5],
                selectedOptions: [],
            }
        },
        components: {
            FullName
        }
    }
</script>

<style lang="scss" scoped>
</style>
