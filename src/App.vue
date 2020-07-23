<template>
    <div id="app">
        <Search @artistName="artistName" />
        <!-- <artist-page /> -->
    </div>
</template>

<script>
import Search from './components/Search.vue';
// import ArtistPage from './components/ArtistPage.vue';

export default {
    components: {
        Search,
        // ArtistPage,
    },
    data() {
        return {
            name: '',
        };
    },
    methods: {
        artistName(name) {
            this.name = name;
            console.log(this.name);
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap');
* {
    font-family: 'Quicksand', sans-serif;
}

#app {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
