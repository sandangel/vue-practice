<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server: {{ serverId }}</p>
        <p>Status: {{ serverStatus }}</p>
        <button class="btn btn-primary" @click="changeStatus">Normal</button>
        <button class="btn btn-danger" @click="changeStatus">Critical</button>
        <button class="btn btn-info" @click="changeStatus">Unknown</button>
    </div>

</template>

<script>
    import {eventBus} from '../../main';

    export default {
        data: function () {
            return {
                serverId: undefined,
                serverStatus: undefined
            }
        },
        created() {
            eventBus.$on('showServerDetail', (serverId, serverStatus) => {
                this.serverId = serverId;
                this.serverStatus = serverStatus
            });
            eventBus.$on('updateServerStatus', (id, status) => {
                if (this.serverId === id) {
                    this.serverStatus = status
                }
            })
        },
        methods: {
            changeStatus(event) {
                switch (event.target.innerText) {
                    case 'Normal':
                        if (this.serverId !== undefined) {
                            eventBus.$emit('updateServerStatus', this.serverId, 'Normal');
                        }
                        break;
                    case 'Critical':
                        if (this.serverId !== undefined) {
                            eventBus.$emit('updateServerStatus', this.serverId, 'Critical');
                        }
                        break;
                    case 'Unknown':
                        if (this.serverId !== undefined) {
                            eventBus.$emit('updateServerStatus', this.serverId, 'Unknown');
                        }
                        break;
                }
            }
        }
    }

</script>

<style>
</style>
