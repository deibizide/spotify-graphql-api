<template>
    <div id="app">
        <!-- <Header /> -->
        <Search @artistName="setArtistName" class="search__component" />
        <artists-result v-if="toggleComponent" @artistId="setArtistId" :artistName="name" />
        <artist-page :v-if="!toggleComponent" :artistName="name" :artistId="id" />
    </div>
</template>

<script>
// import Header from './components/Header.vue';

import Search from './components/Search.vue';
import ArtistsResult from './components/ArtistsResult.vue';
import ArtistPage from './components/ArtistPage.vue';

export default {
    components: {
        // Header,
        Search,
        ArtistsResult,
        ArtistPage,
    },
    data() {
        return {
            name: '',
            id: '',
            toggleComponent: false,
        };
    },
    methods: {
        setArtistName(name) {
            this.name = name;
            this.toggleComponent = true;
        },
        setArtistId(id) {
            this.id = id;
            this.toggleComponent = false;
        },
    },
};
</script>

<style>
* {
    font-family: sans-serif;
    margin: 0;
}
/* .search__component {
    width: 100%;
} */

#app {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
