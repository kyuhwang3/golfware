<template>
    <v-card class="mx-auto my-12">
    <v-card-title class="headline">
        {{ title }}
    </v-card-title>
    <v-img
        :lazy-src="require(`~/static/image/${image}`)"
        :height="450"
        :src="require(`~/static/image/${image}`)"
    ></v-img>
    <v-card-text>
        <p>
            {{ info }}
        </p>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>잔여 수량: {{ stock }}</v-card-text>
    <!--
    <v-card-actions>
        <v-spacer />
        <v-btn
            color="primary"
            nuxt
            to="/inspire"
        >
        Continue
        </v-btn>
    </v-card-actions>
    -->
    </v-card>
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
