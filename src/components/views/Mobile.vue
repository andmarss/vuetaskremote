<template>
    <div class="container">
        <span class="back" @click="back()"><i class="fas fa-chevron-left" style="display: inline-block; margin-right: 10px;"></i>Назад</span>
        <h1 style="text-align: center; margin-bottom: 20px; font-size: 32px; color: #cccccc;">Mobile Development</h1>
        <p style="color: #000; text-align: center;">Мы разрабатываем нативные мобильные приложения для стартапов и бизнеса, а также любое программное обеспечение.</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods: {
            back(){
                try {
                    this.$router.go(-1)
                } catch (e) {
                    this.$router.push({path: '/'})
                }
            }
        },
        mounted(){},
        computed: {}
    }
</script>

<style scoped lang="scss">
    .container {
        position: relative;
        padding-top: 116px;

        .back {
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
            z-index: 10000;

            &:hover {
                color: slategrey;
            }
        }
    }
</style>