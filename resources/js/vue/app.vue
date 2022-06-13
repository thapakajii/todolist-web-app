<template>
    <div id="app" class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form
                v-on:reloadlist="getList()"
            />
        </div>
        <list-view :items="items"
                   v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm"
import listView from "./listView"
export default {
    components: {addItemForm, listView},
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('api/items')
                .then(response => {
                    this.items = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>

.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background-color: #2628ca;
    background-image: linear-gradient(130deg, #4922b3 15%, #5b2be0 40%, #5b2be0 60%, #7c55e6 100%) !important;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 3px;
}
#title {
    text-align: center;
    color: #fdfdfd;
}
</style>