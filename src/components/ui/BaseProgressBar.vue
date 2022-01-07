<template>
    <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" :style="{width: percentage +'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{percentage}}%</div>
    </div>
</template>

<script>
    export default {
        props: ['percentage']
    }
</script>