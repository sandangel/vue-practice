<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
                    @clicking="clickingDetect"
                    :activeServer="activeServer"
                    v-for="(server, index) in servers" :key="index"
                    :serverStatus="server.status"
                    :serverId="server.id">
            </app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue'
    import {eventBus} from '../../main'

    export default {
        data: function () {
            return {
                servers: [
                    {id: 0, status: 'Normal'},
                    {id: 1, status: 'Critical'},
                    {id: 2, status: 'Unknown'},
                    {id: 3, status: 'Normal'},
                    {id: 4, status: 'Unknown'},
                ],
                activeServer: undefined
            }
        },
        components: {
            appServer: Server
        },
        created() {
            eventBus.$on('updateServerStatus', (id, status) => {
                this.servers.forEach(server => {
                    if (server.id === id) {
                        server.status = status
                    }
                })
            })
        },
        methods: {
            clickingDetect(id) {
                this.activeServer = id       
            }
        }
    }
</script>

<style>

</style>
