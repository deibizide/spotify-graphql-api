<template>
    <div class="hello">
        <ApolloQuery v-if="artistName" :query="require('../graphql/queryArtists.gql')" :variables="{ artistName }">
            <template v-slot="{ result: { loading, error, data } }" class="container">
                <h1 v-if="artistName" class="artistSearch__header">Showing Artist for {{ artistName }}</h1>
                <div v-if="error">
                    <p>There is an Error: {{ error }}}</p>
                </div>
                <div v-if="loading">
                    <p>Loading</p>
                </div>
                <div v-if="data" class="artistSearch__container">
                    <div v-for="bandInfo in data.queryArtists" :key="bandInfo.id" @click="handleArtistId(bandInfo.id)">
                        <div v-if="bandInfo.image" class="artistSearch__name-image">
                            <img :src="bandInfo.image" width="200" height="200" />
                            <p>{{ bandInfo.name }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
export default {
    props: ['artistName'],
    methods: {
        handleArtistId(id) {
            this.$emit('artistId', id);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.artistSearch__header {
    text-align: center;
    font-size: 2rem;
    padding: 3% 0% 3% 0%;
}
.artistSearch__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0% 5% 0% 5%;
}
.artistSearch__name-image {
    margin: 10px;
    text-align: center;
}

.artistSearch__name-image img {
    cursor: pointer;
    border-radius: 50%;
    border-width: 0 100px 150px 100px;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
