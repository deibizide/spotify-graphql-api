<template>
    <div class="search-container">
        <div class="search__search-container">
            <div>
                <h1>Search for a track or artist</h1>
                <h5>Fill out your search and click on "Search".</h5>
            </div>
            <input
                class="search__input"
                v-on:keyup.enter="handleSubmit"
                type="text"
                placeholder="Type an Artist Name"
                v-model="name"
            />
            <div @click="handleSubmit" class="search__button">
                <p>Search</p>
            </div>
        </div>
        <artists-result :artist-name="artistName" />
    </div>
</template>

<script>
import ArtistsResult from './ArtistsResult.vue';
export default {
    components: {
        ArtistsResult,
    },
    data() {
        return {
            artistName: '',
            name: '',
        };
    },
    methods: {
        handleSubmit() {
            this.artistName = this.name;
        },
    },
};
</script>


<style lang="css" scoped>
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search__search-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 50px;
    border: 1px solid white;
    width: 50vh;
    height: 250px;
    border: 1px solid black;
    padding: 50px;
    border-radius: 5px;
}

.search__input {
    border: hidden;
    border-bottom: 1px solid black;
    font-size: 30px;
}

.search__input:focus,
input:focus {
    outline: none;
}

.search__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #37b953;
    border-radius: 25px;
    width: 120px;
    height: 40px;
    color: white;
    cursor: pointer;
}

.search__button:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>