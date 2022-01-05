<template>
    <tr>
        <th scope="row">{{ oweHistoryDate }}</th>
        <td>{{ oweHistoryamount }}</td>
    </tr>
</template>

<script>
    export default {
        props:['oweHistoryDate', 'oweHistoryamount']
    }
</script>