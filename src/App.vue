<template>
    <div id="app">
        <Search />
    </div>
</template>

<script>
import Search from './components/Search.vue';

export default {
    name: 'App',
    components: {
        Search,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap');
* {
    font-family: 'Quicksand', sans-serif;
    /* background-color: #242727;
    color: white; */
}

#app {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
