<template>
    <li :class="activeDetect" class="list-group-item" @click="showDetail">Server: {{ serverId }} {{ serverStatus }}</li>
</template>

<script>
    import {eventBus} from '../../main'

    export default {
        props: {
            serverStatus: {
                type: String
            },
            serverId: {
                type: Number
            },
            activeServer: {
                type: Number
            }
        },
        computed: {
            activeDetect() {
                return {
                    'active-server': this.serverId === this.activeServer
                }
            }  
        },
        methods: {
            showDetail() {
                eventBus.$emit('showServerDetail', this.serverId, this.serverStatus);
                this.$emit('clicking', this.serverId)
            }
        }
    }
</script>

<style scoped>
    li {
        cursor: pointer;
        transition: background-color 0.5s;
    }
    
    .active-server {
        background-color: aquamarine;
    }
</style>