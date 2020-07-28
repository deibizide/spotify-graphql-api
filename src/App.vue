<template>
    <div id="app">
        <div>
            <artist-page :artistName="name" :artistId="id" />
        </div>
        <Search @artistName="setArtistName" />
        <artists-result @artistId="setArtistId" :artistName="name" />
    </div>
</template>

<script>
import Search from './components/Search.vue';
import ArtistsResult from './components/ArtistsResult.vue';
import ArtistPage from './components/ArtistPage.vue';

export default {
    components: {
        Search,
        ArtistsResult,
        ArtistPage,
    },
    data() {
        return {
            name: '',
            id: '',
        };
    },
    methods: {
        setArtistName(name) {
            this.name = name;
        },
        setArtistId(id) {
            this.id = id;
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
