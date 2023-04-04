<template>
    <div class="sm:mx-16 md:mx-20 lg:mx-80">
        <div class="text-center mt-10">
            <h1 class="text-3xl font-bold">Cadastro</h1>
        </div>
        
        <div class="mx-5 rounded-xl p-2 text-white my-5 text-center shadow-lg" :class="warning.class" v-if="warning.show">
            <h1> {{ warning.mensage }} </h1>
        </div>

        <form class="px-16" @submit.prevent="finalizarCadastro" id="formCadastro">
            <div class="flex flex-col mb-3">
                <label for="nome" class="text-xl mb-2">Nome</label>
                <input type="text" name="nome" v-model="nome"
                    class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:bg-white focus:border-gray-500">
            </div>

            <div class="flex flex-col mb-3">
                <label for="nome" class="text-xl mb-2">E-mail</label>
                <input type="text" name="email" v-model="email"
                    class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:bg-white focus:border-gray-500">
            </div>

            <div class="flex flex-col mb-3">
                <label for="login" class="text-xl mb-2">Login</label>
                <input type="login" name="login" v-model="login"
                    class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:bg-white focus:border-gray-500">
            </div>

            <div class="flex flex-col mb-3">
                <label for="password" class="text-xl mb-2">Senha</label>

                <div class="flex">
                    <input :type="hiddenPassword.type" id="password" name="password" v-model="password"
                        class="h-8 pl-2 w-full bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:bg-white focus:border-gray-500">

                    <button @click="showPassword" type="button" class="w-9 ml-2">
                        <openEyeIcon v-show="hiddenPassword.show" color="#00000" width="90%" />
                        <closeEyeIcon v-show="!hiddenPassword.show" color="#00000" width="90%" />
                    </button>
                </div>
            </div>

            <div class="flex flex-col mb-3 items-center my-6">
                <label type="button" for="fotoPerfil" class="flex items-center w-[10rem] h-8 rounded-sm bg-gray-300 justify-center required">
                    <span class="mr-2">Foto perfil</span>
                    <span v-show="fotoPerfil.check" class="text-green-600"> &#x2714; </span>
                </label>
                <input type="file" name="fotoPerfil" id="fotoPerfil" accept="image/*" multiple="false" class="hidden" @change="selectFIle">
            </div>

            <div class="flex justify-center mt-6">
                <button
                    class="flex items-center w-56 h-8 rounded-sm shadow-sm bg-transparent justify-center border-2 border-gray-600 hover:bg-gray-600  hover:text-white "
                    type="submit">
                    <loadingIcon v-show="loading" class="animate-low" color="#00000" width="20px"></loadingIcon>
                    <span v-show="!loading">Finalizar</span>
                </button>
            </div>

        </form>

    </div>
</template>
<script>
import axios from "axios"

import openEyeIcon from "@/assets/icon/openEyeIcon.vue"
import closeEyeIcon from "@/assets/icon/closeEyeIcon.vue"
import loadingIcon from "@/assets/icon/loadingIcon.vue"
export default {
    name: 'cadastroView',
    data() {
        return {
            loading: false,
            nome: null,
            email: null,
            login: null,
            password: null,
            fotoPerfil: {
                arquivo: null,
                check: false,
            },
            hiddenPassword: {
                type: 'password',
                show: true
            },
            warning: {
                class: '',
                mensage: '',
                show: false
            }
        }
    },
    components: {
        openEyeIcon,
        closeEyeIcon,
        loadingIcon
    },
    methods: {
        async finalizarCadastro() {
            
            let formData = new FormData();

            formData.append('nome', this.nome);
            formData.append('login', this.login);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('foto', this.foto);
            
            try{
                let result = await axios({
                    method: 'post',
                    url: 'http://localhost:8081/user',
                    headers: { "Content-Type":'multipart/form-data'},
                    data: formData
                })

                let { status, mensage } = result.data;

                if (status >= 400) {
                    this.warning.class = 'bg-red-600'
                    this.warning.show = true
                    this.warning.mensage = mensage                   
                    return
                }

                if (status >= 200 && status <= 299) {
                    this.warning.class = 'bg-green-600'
                    this.warning.show = true
                    this.warning.mensage = mensage

                    setInterval(() => this.$router.push({ path:'/' }), 2500)
                }

                this.loading = false;

            }catch( err ){
                this.warning.class = 'bg-red-600'
                this.warning.show = true
                this.warning.mensage = 'Error ao conectar o servidor.'
                this.loading = false;
                console.log(err)
            }
            
        },
        selectFIle(event){
            let selectedFile = event.target.files[0];
            this.fotoPerfil.arquivo = selectedFile;
            this.fotoPerfil.check = true
        },
        showPassword() {

            if (this.hiddenPassword.show) {
                this.hiddenPassword.type = 'text'
                this.hiddenPassword.show = false
                return;
            }

            this.hiddenPassword.type = 'password'
            this.hiddenPassword.show = true

        }
    }
}
</script>
<style ></style>