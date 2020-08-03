// todo There is an error when reaching ArtistPage - 'queryArtists' of null"
// Check inspector
<template>
    <div>
        <ApolloQuery v-if="artistId" :query="require('../graphql/queryArtist.gql')" :variables="{ artistName }">
            <template v-slot="{ result: { loading, error, data } }" class="container">
                <div v-if="error">
                    <p>There is an Error: {{ error }}}</p>
                </div>
                <div v-if="loading">
                    <p>Loading</p>
                </div>
                <h1 v-if="artistName" class="artistPage__header">Showing Artist for {{ artistName }}</h1>
                <div v-for="artist in data.queryArtists" :key="artist.id">
                    <div v-if="artistId === artist.id" class="artistPage__container">
                        <div v-for="(artistAlbum, i) in artist.albums" :key="i">
                            <div class="artistPage__album-container">
                                <div class="artistPage__overlayer">
                                    <font-awesome-icon class="artistPage__font-awesome" icon="play" />
                                </div>
                                <img :src="artistAlbum.image" width="200" height="200" />
                            </div>
                            <p class="artistPage__album-title">
                                {{
                                    artistAlbum.name.length > 25
                                        ? artistAlbum.name.slice(0, 25) + '...'
                                        : artistAlbum.name
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
export default {
    props: ['artistName', 'artistId'],
};
</script>

<style  scoped>
.artistPage__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0% 5% 0% 5%;
}

.artistPage__header {
    text-align: center;
    font-size: 2rem;
    padding: 3% 0% 3% 0%;
}

.artistPage__album-container {
    margin: 10px;
}

.artistPage__album-title {
    text-align: center;
}

.artistPage__overlayer {
    position: absolute;
    width: 200px;
    height: 200px;
}
.artistPage__overlayer:hover {
    background: rgba(0, 0, 0, 0.6);
}
.artistPage__overlayer svg {
    display: none;
}
.artistPage__overlayer:hover svg {
    display: block;
}

.show {
    display: block;
}

.hide {
    display: none;
}

.artistPage__font-awesome {
    margin-top: 60px;
    margin-left: 70px;
    color: #fff;
    font-size: 73px;
    transition: 100ms ease-in-out;
    cursor: pointer;
}

.artistPage__font-awesome:hover {
    transform: scale(1.1);
}
</style>