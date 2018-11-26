<template>
    <header>
        <ul class="nav">
            <li @click.prevent="hideError()"><router-link to="/" exact>Home</router-link></li>
            <li @click.prevent="hideError()"><router-link to="/about" exact>About Us</router-link></li>
            <li @click.prevent="hideError()"><router-link to="/contact" exact>Contact</router-link></li>
        </ul>
        <div class="overlay" ref="overlay" v-show="open">
            <ul>
                <li @click.prevent="hideOverlay()"><router-link to="/" exact>Home</router-link></li>
                <li @click.prevent="hideOverlay()"><router-link to="/about" exact>About Us</router-link></li>
                <li @click.prevent="hideOverlay()"><router-link to="/contact" exact>Contact</router-link></li>
            </ul>
        </div>
        <div :class="open ? 'hamburger open' : 'hamburger'" @click.prevent="toggleOverlay()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                open: false
            }
        },
        methods: {
            // когда жмем по гамбургеру - тогглим состояние this.open
            toggleOverlay(){
                this.open = !this.open;
            },

            hideOverlay(){
                this.open = false;

                // скрываем ошибки на форме при переходе на другую страницу
                this.hideError();
            },

            hideError(){
                this.$store.dispatch('changeDanger', false);
            }
        },
        mounted(){
        },
        computed: {
        }
    }
</script>

<style scoped lang="scss">
    header {
        position: absolute;
        width: 100%;
        top: 0;
        right: 50%;
        margin-right: -50%;
        z-index: 100;

        &:before,
        &:after{
            content: "";
            display: table;
        }

        &:after{
            clear: both;
        }

        & {
            *zoom: 1;
        }
    }

    .nav {
        position: relative;
        text-align: center;
        font-size: 14px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

        li {
            display: inline-block;
            vertical-align: middle;
            padding: 50px 25px;
            transition: background-color .5s ease, font-weight .5s ease;
            font-weight: 600;
            text-transform: uppercase;
            cursor: pointer;

            a {
                text-decoration: none;
                color: #000;
                transition: color .5s ease;

                &.router-link-active {
                    color: #00BC8C;
                }
            }

            &:hover {
                a {
                    color: #00BC8C;
                }
            }
        }
    }

    .overlay {
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        background-color: rgb(0,0,0); /* Black fallback color */
        background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
        overflow-x: hidden; /* Disable horizontal scroll */
        transition: 0.5s;

        ul {
            position: relative;
            top: 25%; /* 25% from the top */
            width: 100%; /* 100% width */
            text-align: center; /* Centered text/links */
            margin-top: 30px;

            li {
                a {
                    padding: 8px;
                    text-decoration: none;
                    font-size: 36px;
                    color: #818181;
                    display: block; /* Display block instead of inline */
                    transition: 0.3s;

                    &:hover, &:focus {
                        color: #f1f1f1;
                    }
                }
            }
        }
    }

    .hamburger {
        display: none;
        width: 40px;
        height: 45px;
        top: 10px;
        right: 10px;
        position: absolute;
        margin-top: 30px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
        z-index: 1000000;
        
        &.open {
            span {
                background-color: #fff;
            }
        }

        span {
            display: block;
            position: absolute;
            height: 6px;
            width: 100%;
            background: #00BC8C;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
        }
    }

    .hamburger span:nth-child(1) {
        top: 0px;
    }

    .hamburger span:nth-child(2),.hamburger span:nth-child(3) {
        top: 12px;
    }

    .hamburger span:nth-child(4) {
        top: 24px;
    }

    .hamburger.open span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
    }

    .hamburger.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .hamburger.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .hamburger.open span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
    }

    @media screen and (max-width: 640px){
        .hamburger {
            display: block;
        }

        .nav {
            display: none;
        }

        .big-image .big-image__content {
            transform: translateX(-50%) translateY(-50%);
        }
    }
</style>