<template>
    <div>
        <Hero />
        <Slider />
        <Form />
    </div>
</template>

<script>
    import Hero from '../includes/Hero.vue';
    import Slider from '../includes/Slider.vue';
    import Form from '../Form.vue';

    export default {
        data(){
            return {}
        },
        methods: {},
        mounted(){},
        computed: {},
        components: {
            Hero,
            Slider,
            Form
        }
    }
</script>

<style scoped>

</style>