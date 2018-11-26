<template>
    <section class="big-image" ref="image">
        <div class="container">
            <div class="big-image__content">
                <h1 class="big-image__title">Бренд №1</h1>
                <h3><span class="rotate">{{ txt }}</span></h3>
                <p>Мы лучшие в своем деле</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                loopNum: 0,
                data: ['Web-development', 'Seo', 'Mobile-development', 'Pay Per Click', 'Social Media Marketing', 'Digital Complex'],
                period: 2000,
                txt: '',
                isDeleting: false,
                timeout: null
            }
        },
        methods: {
            tick(){
                if(this.timeOut) {
                    // чистим очередь из timeout'ов
                    clearTimeout(this.timeOut);
                }

                let i = this.loopNum % this.data.length;
                let text = this.data[i];

                if(this.isDeleting){
                    this.txt = text.substring(0, this.txt.length - 1);
                } else {
                    this.txt = text.substring(0, this.txt.length + 1);
                }

                let delta = 300 - Math.random() * 100;
                // если удаление - удаляем текст в 3 раза быстрее
                if(this.isDeleting) delta = delta / 3;
                // текст набран полностью - пришло время его удалить
                if(!this.isDeleting && this.txt === text) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') { // текст удален - печатаем новый
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }

                // запоминаем timeout
                this.timeOut = setTimeout(() => this.tick(), delta);
            },

            move(){
                let image = this.$refs.image;
                // добавляем эффект параллакса
                image.addEventListener('mousemove', e => {
                    let height = 10 / window.innerHeight;
                    let width = 10 / window.innerWidth;

                    let pageX = e.pageX - (window.innerWidth / 2);
                    let pageY = e.pageY - (window.innerHeight / 2);

                    let newValueX = width * pageX * (-1) - 50;
                    let newValueY = height * pageY * (-1) - 50;

                    image.style.backgroundPosition = `${newValueX}px ${newValueY}px`;
                })
            }
        },
        mounted(){
            this.tick();
            this.move();
        },
        computed: {}
    }
</script>

<style scoped lang="scss">

    .big-image {
        position: relative;
        text-align: center;
        width: 100%;
        min-height: 650px;
        background-color: #16A9D2;
        background-image: url("../../assets/big-image.jpg");
        background-size: 125% 125%;
        background-position: center center;
        background-repeat: no-repeat;

        .big-image__content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-40%);
            z-index: 10;
            text-align: center;
            color: #ffffff;

            .big-image__btn {
                background-color: transparent;
                border: 3px solid #fff;
                transition: all .5s ease;
                text-transform: uppercase;
                font-weight: bold;

                &:hover {
                    padding: 15px 90px;
                    font-weight: bolder;
                    background-color: #fff;
                    color: #000000;
                }
            }

            h1 {
                margin-bottom: 20px;
                font-size: 30px;
            }

            h3 {
                margin-bottom: 10px;
                font-size: 20px;

                .rotate {
                    border-right: 5px solid #00BC8C;
                    animation: blink 1s step-end infinite;
                }

                @keyframes blink {
                    from, to {
                        border-color: transparent;
                    }
                    50% {
                        border-color: #00BC8C;
                    }
                }
            }

            p {
                margin-bottom: 20px;
                font-size: 16px;
            }
        }
    }

    .btn {
        padding: 15px 80px;
        text-transform: uppercase;
        display: inline-block;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        background-color: #00BC8C;
        color: #fff;
        transition: background .5s;

        &:hover {
            background-color: darken(#00BC8C, 5%);
        }

        &:focus {
            outline: 0;
        }
    }
</style>