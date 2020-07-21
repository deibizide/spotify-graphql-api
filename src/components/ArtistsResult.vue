<template>
    <div class="hello">
        <ApolloQuery :query="require('../graphql/byName.gql')" :variables="{name}">
            <template v-slot="{result: {loading, error, data}}" class="container">
                <h1 v-if="name" class="artistSearch__header">Showing Artist for {{name }}</h1>
                <!-- <div v-if="error">
                    <p>Error: {{error}}}</p>
                </div>-->
                <div v-if="data" class="artistSearch__container">
                    <div v-for="(bandInfo, i) in data.queryArtists" :key="i">
                        <div v-if="bandInfo.image" class="artistSearch__name-image">
                            <img :src="bandInfo.image" width="200" height="200" />
                            <p>{{bandInfo.name}}</p>
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
    data() {
        return {
            name: '',
        };
    },
    watch: {
        artistName: function() {
            this.name = this.artistName;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.artistSearch__header {
    text-align: center;
    color: white;
}
.artistSearch__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.artistSearch__name-image {
    border-radius: 50%;
    margin: 10px;
    text-align: center;
    color: white;
}

.artistSearch__name-image img {
    border-radius: 50%;
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
