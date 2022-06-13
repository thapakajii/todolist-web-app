<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item
                :item="item"
                class="item"
                v-on:itemchanged="$emit('reloadlist')"
            />
        </div>
    </div>
</template>

<script>
import listItem from "./listItem";
export default {
    props: ['items'],
    components: {
        listItem
    }
}
</script>
<style scoped>
.item {
    /* background: #fff75e; */
    background-color: #ffe97f;
    background-image: linear-gradient(130deg, #ffe566 15%, #ffe14c 40%, #ffdd32 60%, #ffd819 100%) !important;
    padding: 5px;
}
</style>