<template>
    <tr>
        <th scope="row">{{ oweType }}</th>
        <td>{{ oweReason }}</td>
        <td>{{ oweDate }}</td>
        <td><base-progress></base-progress></td>
        <td>{{ oweAmount }}</td>
        <td>
            <button type="button" class="btn btn-info btn-sm" v-on:click="openEditModal(id, oweType)">Edit</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['id', 'oweType', 'oweDate', 'oweAmount', 'oweReason'],
        methods: {
            openEditModal(id, oweType){
                this.$emit('openEditModal', id, oweType);
            }
        }
    }
</script>