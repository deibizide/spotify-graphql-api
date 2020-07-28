<template>
    <div>
        <ApolloQuery v-if="artistId" :query="require('../graphql/queryArtist.gql')" :variables="{ artistName }">
            <template v-slot="{ result: { loading, error, data } }" class="container">
                <div v-for="artist in data.queryArtists" :key="artist.id">
                    <div v-if="artistId === artist.id">
                        <div v-for="(artistAlbum, i) in artist.albums" :key="i">
                            <p>{{ artistAlbum.name }}</p>
                            <img :src="artistAlbum.image" width="200" height="200" />
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