<template>
    <v-row no-gutters>
        <Item v-for="(item, index) in itemList" :key="index" :title="item.title" :image="item.img" :info="item.info" :stock="item.stock"></Item>
    </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Item from '~/components/Item.vue'

export default {
    computed: {
        ...mapGetters({
            itemList: 'item/itemList'
        }),
    },
    components: {
        Item
    }
}
</script>
