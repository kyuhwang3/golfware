<template>
      <v-dialog
        v-model="dialog"
        persistent
      >
        <v-card>
            <v-card-title class="headline">
                {{title}}
            </v-card-title>
            <v-card-text>{{info}}</v-card-text>
            <v-img
                :lazy-src="require(`~/static/image/${image}`)"
                :height="450"
                :src="require(`~/static/image/${image}`)"
            ></v-img>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>

export default {
    props: {
        title: String,
        info: String,
        stock: Number,
        image: String
    },
    computed: {
    },
    components: {
    }
}
</script>
