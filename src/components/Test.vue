<template>
    <div>
        <p>Hello, {{ name }}!</p>
        <img :src="photo">
        <button @click="signIn">signIn</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    computed: mapState({
        photo: (state) => state.user.photo,
        name: (state) => state.user.name,
    }),
    methods: {
        ...mapActions([
            'signIn',
        ]),
    }
}
</script>

<style scoped>
p {
    font-style: italic;
}
</style>
