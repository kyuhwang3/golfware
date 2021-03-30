<template>
    <v-container fluid grid-list-xl>
        <v-layout row wrap align-content-end>
            <v-flex v-for="(item, index) in filteredItem" class="xs12 sm6 md4 lg3 xl2 justify-space-around" :key="index">
                <Item :key="index" :title="item.title" :image="item.img" :info="item.info" :stock="item.stock"></Item>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Item from '~/components/Item.vue'

export default {
    computed: {
        ...mapGetters({
            itemList: 'item/itemList',
            keyword: 'item/keyword'
        }),
        filteredItem: function(){
            debugger;
            if (this.keyword === 'All'){
                return this.itemList;
            }
            return this.itemList.filter(v=>v.keyword === this.keyword);
        }
    },
    components: {
        Item
    }
}
</script>
