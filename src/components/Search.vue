<template>
    <div class="search-container">
        <img src="../assets/logo.png" alt="Picture Header" class="search__spotify-logo" />
        <div class="search__search-container">
            <div class="search__text-header">
                <h1>Search without limits</h1>
                <h2>Fill out your search and click on "Search".</h2>
            </div>
            <div :class="isAnimatited ? 'animation' : ''">
                <input
                    @click="handleAnimation"
                    id="search__input"
                    v-on:keyup.enter="handleSubmit"
                    type="text"
                    v-model="name"
                />
                <label for="search__input">Type an Artist Name</label>
            </div>
            <div @click="handleSubmit" class="search__button">
                <p>SEARCH</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            isAnimatited: false,
        };
    },
    methods: {
        handleSubmit() {
            this.$emit('artistName', this.name);
        },
        handleAnimation() {
            this.isAnimatited = true;
        },
    },
};
</script>


<style lang="css" scoped>
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #509cf5;
    height: 50vh;
    width: 100%;
}

.search__spotify-logo {
    width: 20%;
    margin-top: 50px;
}

.search__search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    text-align: center;
    color: #ffffff;
}
.search__search-container h1 {
    margin: 20px 0px 0px 0px;
    font-size: 2rem;
}
.search__search-container h2 {
    font-size: 1.5rem;
    font-weight: 200;
    margin: 20px 0px 20px 0px;
}

#search__input {
    border: hidden;
    border-bottom: 1px solid #ffffff;
    font-size: 2rem;
    background-color: transparent;
    margin-bottom: 20px;
    color: #ffffff;
    width: 30rem;
}

label {
    color: #ffffff;
    position: absolute;
    font-size: 20px;
    cursor: text;
    transform: translateY(-25px);
    transition: transform 0.3s ease;
    left: 0;
    bottom: 50px;
}

/* Input Animation Styles */
.animation label {
    transform: translateY(-55px);
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
}

.search__input:focus,
input:focus {
    outline: none;
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
}

.search__button:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>