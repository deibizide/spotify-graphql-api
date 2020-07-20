<template>
    <div id="app">
        <artist-search />
    </div>
</template>

<script>
import ArtistSearch from './components/ArtistSearch.vue';

export default {
    name: 'App',
    components: {
        ArtistSearch,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap');
* {
    font-family: 'Quicksand', sans-serif;
    background-color: #242727;
}
</style>
