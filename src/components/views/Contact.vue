<template>
    <div class="container">
        <h1 style="text-align: center; margin-bottom: 20px; font-size: 32px; color: #cccccc;">Свяжитесь с нами</h1>
        <Contact :showTitle="false" />
    </div>
</template>

<script>
    import Contact from '../Form';

    export default {
        components: {
            Contact: Contact
        }
    };
</script>

<style scoped>
    .container {
        padding-top: 100px;
    }

    @media screen and (max-width: 450px) {
        h1 {
            font-size: 20px;
        }
    }
</style>