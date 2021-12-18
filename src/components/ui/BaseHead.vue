<template>
    <div>
        <h3>
            <slot name="title">
                {{ title }}
            </slot>
        </h3>

        <button type="button" class="btn btn-sm btn-primary" v-on:click="openModal">
            <slot>{{ buttonName }}</slot>
        </button>
    </div>
</template>

<script>
export default {
    props: ['buttonName', 'title'],
    methods: {
        openModal(){
            this.$emit('openModal');
        }
    }
}
</script>

<style scoped>
    h3 {
        display: inline-block;
    }

    button{
        float: right;
    }
</style>