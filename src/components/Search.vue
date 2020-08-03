<template>
    <div class="search__container">
        <div class="search__search-container">
            <img src="../assets/logo.png" alt="Picture Header" class="search__spotify-logo" />
            <div class="search__text-header">
                <h1>Search without limits</h1>
                <h2>Fill out your search and click on "Search".</h2>
            </div>
            <div>
                <input
                    id="search__input"
                    v-on:keyup.enter="handleSubmit"
                    type="text"
                    v-model="name"
                    placeholder="Type an Artist Name"
                />
            </div>
            <div @click="handleSubmit" class="search__button">
                <p>SEARCH</p>
            </div>
            <div class="search__img-container">
                <img src="../assets/girl.png" alt="Picture of a girl" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('artistName', this.name);
        },
    },
};
</script>


<style lang="css" scoped>
.search__container {
    display: flex;
    flex-direction: column;
    background-color: #509cf5;
    height: 60vh;
    width: 100%;
}

.search__spotify-logo {
    width: 400px;
    margin-top: 50px;
}

.search__search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-top: 50px; */
    height: 100%;
    margin-left: 10%;
    color: #ffffff;
}
.search__search-container h1 {
    margin: 20px 0px 0px 0px;
    font-size: 4rem;
}
.search__search-container h2 {
    font-size: 2rem;
    font-weight: 200;
    margin: 20px 0px 20px 0px;
}

.search__img-container {
    position: absolute;
    top: 81px;
    right: 10px;
    margin-right: 10%;
}

#search__input {
    border: hidden;
    border-bottom: 1px solid #ffffff;
    font-size: 2rem;
    background-color: transparent;
    color: #ffffff;
    width: 30rem;
}

.search__input:focus,
input:focus {
    outline: none;
    color: #ffffff;
}

input::placeholder {
    font-size: 1rem;
    color: #ffffff;
}

.search__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #37b953;
    border-radius: 25px;
    width: 150px;
    height: 50px;
    color: white;
    cursor: pointer;
    margin: 20px 0px 20px 0px;
}

.search__button:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

@media only screen and (max-width: 1350px) {
    .search__img-container {
        display: none;
    }
}

@media only screen and (max-width: 800px) {
    .search__container {
        height: 40vh;
    }
    .search__spotify-logo {
        width: 200px;
    }
    .search__search-container h1 {
        font-size: 2rem;
    }
    .search__search-container h2 {
        font-size: 1rem;
        font-weight: 200;
    }
    #search__input {
        width: 20rem;
    }
}
</style>