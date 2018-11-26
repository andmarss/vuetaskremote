<template>
    <section class="contacts">
        <div class="container" v-if="!submitted">
            <h2 class="title title-with-lines" v-if="showTitle">Контакты</h2>
            <p class="contacts__paragraph">Оставьте свои контактные данные, и наш менеджер свяжется с Вами.</p>
            <div class="wrapper">
                <div class="notification is-danger" v-if="showDanger">
                    <button class="delete" @click="hideError()"></button>
                    <p v-if="errorText.length === 0">
                        Не заполнены обязательные поля: <span v-for="(field, index) in emptyFields">{{(index === emptyFields.length-1) ? field : `${field}, `}}</span>
                    </p>
                    <p v-else>
                        {{errorText}}
                    </p>
                </div>
            </div>
            <div class="wrapper">
                <div class="contacts-left">
                    <input type="text" :class="showDanger ? 'input form__input error' : 'input form__input'" @blur="blurName()" v-model="message.fromName" placeholder="Имя">
                    <input type="email" :class="showDanger ? 'input form__input error' : 'input form__input'" @blur="blurEmail();" v-model="message.fromEmail" placeholder="Email">
                    <vue-tel-input ref="input" v-model="message.fromTelephone" @onInput="checkPhone" @onBlur="blurPhone" :preferredCountries="['ru', 'ua']" placeholder="Номер телефона">
                    </vue-tel-input>
                </div>
                <div class="contacts-right">
                    <textarea rows="4" :class="(showDanger || showCounter) ? 'input form__input error' : 'input form__input'" @input="checkMessage()" @blur="hideError()" v-model="message.fromMessage" placeholder="Текст сообщения"></textarea>
                    <p style="text-align: left; margin-bottom: 20px;" v-if="showCounter">Осталось: {{ message.fromMessageLeft - message.fromMessage.length }}</p>
                    <button class="btn contacts__btn" @click.prevent="postMessage">Отправить</button>
                </div>
            </div>
        </div>
        <div class="transparent" v-if="showLoader"></div>
        <div class="loader" v-if="showLoader">
            <img src="../assets/loader.gif" alt="">
        </div>
        <div class="container" v-if="submitted">
            <h2 class="title title--success">Ваше сообщение отправлено!</h2>
            <h4 class="little-title title--success">Очень скоро наш менеджер Вам позвонит</h4>
            <button class="btn contacts__btn" style="max-width: 250px;" @click.prevent="submitted = false">Отправить еще</button>
        </div>
    </section>
</template>

<script>
    import VueTelInput from 'vue-tel-input';

    export default {
        props: {
            showTitle: {
                types: Boolean,
                default: true
            }
        },

        data(){
            return {
                message: {
                    fromName: '',
                    fromEmail: '',
                    fromTelephone: '',
                    fromMessage: '',
                    fromMessageLeft: 250
                },
                submitted: false,
                showLoader: false,
                errorText: '',
                emptyFields: [],
                validPhone: false
            }
        },
        methods: {
            postMessage(){

                this.errorText = '';

                this.emptyFields = Object.keys(this.message).filter(key => {
                    return this.message[key].length === 0;
                });

                // Если на форме есть не заполненные поля - говорим об этом
                if (this.emptyFields.length > 0) {

                    this.emptyFields = this.emptyFields.map(field => {
                        if (field === 'fromEmail') {
                            return '"Email"';
                        } else if (field === 'fromTelephone') {
                            return '"Номер телефона"';
                        } else if (field === 'fromName') {
                            return '"Имя"';
                        } else if (field === 'fromMessage') {
                            return '"Текст сообщения"';
                        }
                    });

                    this.showError();

                    return;

                }
                // проверяем email на валидность
                if(!this.checkEmail()){
                    this.errorText = `Введен невалидный email-адрес.`;
                    this.showError();

                    return;
                }
                // проверяем на валидность телефон
                if(!this.validPhone) {
                    this.errorText = `Введен невалидный номер телефона.`;
                    this.showError();

                    return;
                }
                // если все ок - имитируем отправку формы
                this.showLoader = true;
                // а через 5 сек. показываем, что все успешно!
                setTimeout(() => {
                    this.showLoader = false;
                    this.submitted = true;
                    this.message.fromName = '';
                    this.message.fromEmail = '';
                    this.message.fromTelephone = '';
                    this.message.fromMessage = '';
                }, 5000)
            },

            checkEmail(){
                return /[a-z0-9]+\@\w+\.\w{1,5}/ig.test(this.message.fromEmail);
            },

            checkPhone({ number, isValid, country }){
                this.validPhone = isValid;
            },

            showError(){
                this.$refs.input.$el.classList.remove('error');

                this.$refs.input.$el.classList.add('error');

                this.$store.dispatch('changeDanger', true);
            },

            hideError(){
                this.$refs.input.$el.classList.remove('error');
                this.errorText = '';
                this.emptyFields = [];
                this.$store.dispatch('changeDanger', false);
            },

            checkMessage(){
                this.message.fromMessage = ((this.message.fromMessageLeft - this.message.fromMessage.length) === 0 || (this.message.fromMessageLeft - this.message.fromMessage.length) < 0) ? this.message.fromMessage.slice(0,250) : this.message.fromMessage;
            },

            blurEmail(){
                this.hideError();

                if(this.message.fromEmail.length > 0 && !this.checkEmail()) {
                    this.errorText = `Введен невалидный email-адрес.`;
                    this.showError();

                    return;
                }
            },

            blurPhone(){
                this.hideError();

                if(!this.validPhone) {
                    this.errorText = `Введен невалидный номер телефона.`;
                    this.showError();

                    return;
                }
            },

            blurName(){
                this.hideError();

                if(this.message.fromName.length > 0 && this.message.fromName.length < 3) {
                    this.errorText = `Поле имени должно содержать не менее 3-х символов.`;
                    this.showError();

                    return;
                }
            }
        },
        mounted(){
            console.log();
        },
        computed: {
            showDanger(){
                return this.$store.getters.showDanger
            },

            showCounter(){
                return (this.message.fromMessageLeft - this.message.fromMessage.length) < 250;
            }
        },
        components: {
            'vue-tel-input': VueTelInput
        }
    }
</script>

<style scoped lang="scss">
    .contacts {
        position: relative;
    }

    .container {
        max-width: 1170px;
        width: 97%;
        margin: 0 auto;
    }

    .title {
        font-size: 30px;
        line-height: 30px;
        color: #2a3a3f;
        text-transform: uppercase;
    }

    .title-with-lines {
        position: relative;
        display: table;
        padding: 20px 0;
        text-align: center;
        margin-left: auto;
        margin-right: auto;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -3px;
            left: -25px;
            width: 15px;
            height: 5px;
            background-color: #00BC8C;
        }

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -3px;
            right: -25px;
            width: 15px;
            height: 5px;
            background-color: #00BC8C;
        }
    }

    .contacts__paragraph {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        color: #949494;
    }

    .contacts-left, .contacts-right {
        display: inline-block;
        vertical-align: top;
        width: 49%;
        font-size: 16px;
    }

    .contacts-left {
        margin-right: 2%;
    }

    .input {
        margin-bottom: 20px;
        font-size: 1rem;
        box-shadow: inset 0px 5px 12px -15px rgba(0,0,0,0.89);
        border: 1px solid #ccc;
        transition: border .5s;

        &:focus {
            outline: none;
            border: 1px solid #00BC8C;
        }
    }

    .form__input {
        display: block;
        width: 100%;
    }

    .contacts__textarea {
        padding: 12px;
    }

    .contacts__btn {
        display: block;
        width: 100%;
        padding: 11px 60px;
        margin-bottom: 20px;
    }

    .wrapper {
        display: block;
        position: relative;
        width: 100%;
        font-size: 0;
    }

    .btn {
        padding: 15px 60px;
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

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .loader {
        width: 26px;
        height: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -13px;
        margin-top: -13px;

        img {
            display: block;
            width: 100%;
            height: auto;
        }
    }

    .form__input {
        display: block;
        width: 100%;
    }

    .input {
        padding: 10px;
        border-radius: 4px;

        margin-right: 20px;
        font-size: 1rem;
        box-shadow: inset 0 5px 12px -15px rgba(0,0,0,0.89);
        border: 1px solid #ccc;
        transition: border .5s;

        &:focus {
            outline: none;
            border: 1px solid #00BC8C;
        }

        &.error {
            border: 1px solid #ff3860;

            &:focus {
                outline: none;
                border: 1px solid #ff3860;
            }
        }
    }

    .title--success {
        margin-top: 30px;
        margin-bottom: 15px;
    }

    .transparent {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, .3);
    }
    
    .is-danger {
        position: relative;
        background-color: #ff3860;
        color: #fff;
        padding: 20px;
        border-radius: 4px;
        font-size: 14px;
        margin-bottom: 20px;
        
        p {
            color: #fff;
        }
    }

    .delete {
        position: absolute;
        right: 10px;
        top: 10px;
        background-color: rgba(10,10,10,.2);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        border: none;
        cursor: pointer;
        transition: background-color .5s ease;

        &:hover {
            background-color: rgba(10,10,10,.5);
        }

        &:before, &:after {
            background-color: #fff;
            content: "";
            display: block;
            left: 50%;
            position: absolute;
            top: 50%;
            -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
            -webkit-transform-origin: center center;
            transform-origin: center center;
        }

        &:before {
            height: 2px;
            width: 50%;
        }

        &:after {
            height: 50%;
            width: 2px;
        }
    }

    .vue-tel-input {
        border-radius: 4px;
        margin-right: 0;
        font-size: 1rem;
        box-shadow: inset 0 5px 12px -15px rgba(0,0,0,0.89);
        border: 1px solid #ccc;
        transition: border .5s;
        padding: 4px 0;

        &.error {
            border: 1px solid #ff3860;

            &:focus {
                outline: none;
                border: 1px solid #ff3860;
            }
        }

        &:focus {
            outline: none;
            border: 1px solid #00BC8C;
        }

        &.error {
            border: 1px solid #ff3860;

            &:focus {
                outline: none;
                border: 1px solid #ff3860;
            }
        }
    }

    @media screen and (max-width: 640px) {
        .contacts-left, .contacts-right {
            width: 100%;
        }

        .contacts-left {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
</style>