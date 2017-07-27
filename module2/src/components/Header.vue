<template>
    <div class="header">
        <h1>Quotes Added</h1>
        <div class="quote-progress"><span class="quote-percent" :style="{width: progress * 10 + '%'}">{{ progress }} / 10 </span></div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                progress: 5      
            }
        }
    }
</script>

<style lang="scss" scoped>
    .quote-progress {
        width: 100%;
        background-color: #d7d7d7;
        margin: 0 auto;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        height: 30px;
    }
    .quote-percent {
        background-color: rgba(102, 189, 255, 0.61);
        display: block;
        text-align: center;
        transition: width 0.5s;
        border-radius: 5px;
        height: 30px;
        padding: 5px;
        box-sizing: border-box;
        color: white;
    }
    
    h1 {
        color: #3ebaff;
        font-weight: normal;
    }
    
    .header {
        width: 1000px;
        margin: 30px auto;
    }
</style>