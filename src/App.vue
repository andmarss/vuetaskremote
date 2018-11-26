<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
    import Header from './components/includes/Header.vue';

    export default {
        methods: {

        },

        mounted(){
        },

        components: {
            Header
        }
    };

</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @import "../node_modules/vue-tel-input/dist/vue-tel-input.css";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
</style>