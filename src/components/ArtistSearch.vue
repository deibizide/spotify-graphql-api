<template>
    <div class="hello">
        <!-- <input type="text" v-model="name" /> -->
        <ApolloQuery :query="require('../graphql/byName.gql')" :variables="{name}">
            <template v-slot="{result: {loading, error, data}}" class="container">
                <h1 class="artistSearch__header">Showing Artist for {{name }}</h1>
                <div v-if="error">
                    <p>Error: {{error}}}</p>
                </div>
                <div v-if="data">
                    <div v-for="(bandInfo, i) in data.queryArtists" :key="i" class="artistSearch__container">
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
    data() {
        return {
            name: 'Korn',
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.artistSearch__header {
    margin-left: 30px;
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
