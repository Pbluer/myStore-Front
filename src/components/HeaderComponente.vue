<template>
  <basedModalComponente v-show="modalLogin.show">

    <template v-slot:main>
      <div class=" bg-white w-[23.5rem] mt-[10rem] mx-auto rounded-sm shadow-sm p-10 animate__animated animate__animated ">

        <div class="flex justify-between mb-7">
          <h2 class="text-2xl font-bold">Login</h2>
          <button @click="closeModal()">X</button>
        </div>
        <form @submit.prevent="logar()">
          <div class="rounded-xl p-2 text-white my-2 text-center" :class="modalLogin.warning.class" v-if="modalLogin.warning.show">
            <h1> {{ modalLogin.warning.mensage }} </h1>
          </div>

          <div class="flex flex-col mb-3">
            <label for="email" class="text-xl mb-2">Login</label>
            <input type="text" name="login" v-model="modalLogin.login"
              class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:border-gray-500">
          </div>

          <div class="flex flex-col mb-3">
            <label for="password" class="text-xl mb-2">Senha</label>

            <div class="flex">
              <input :type="hiddenPassword.type" id="password" name="password" v-model="modalLogin.password"
                class="h-8 pl-2 w-[20rem] bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:border-gray-500">

              <button @click="showPassword" type="button" class="bg-gray-300 w-9">
                <openEyeIcon v-show="hiddenPassword.show" color="#00000" width="90%" />
                <closeEyeIcon v-show="!hiddenPassword.show" color="#00000" width="90%" />
              </button>
            </div>
          </div>

          <div class="flex justify-center mt-6">
            <button
              class="flex items-center w-56 h-8 rounded-sm shadow-sm bg-transparent justify-center border-2 border-gray-600 hover:bg-gray-600  hover:text-white "
              type="submit">        
              <loadingIcon v-show="loading" class="animate-low" color="#00000" width="20px" ></loadingIcon>
              <span v-show="!loading" >Logar</span>
            </button>
          </div>

          <div class="flex justify-center mt-8">
            <router-link to="/cadastro" class="underline text-blue-700 font-bold" @click="closeModal">
              Cadastre-se
            </router-link>
          </div>

        </form>
      </div>
    </template>
  </basedModalComponente>

  <div class="bg-gray-300 py-3 px-2 ">

    <div class="flex justify-between items-center">

      <div class="ml-4">
        <router-link to="/">
          <logoIcon color="#4ADE80" width="50px" height="50px" class="mr-2" />
        </router-link>
      </div>

      <button @click="openMenu">
        <menuIcon color="#1F2937" width="25px" height="25px" />
      </button>

      <nav
        class="mt-[16rem] shadow-md absolute bg-gray-200 z-50 rounded-lg p-2 right-5 animate__animated animate__fadeInRight"
        :class="menu.class">

        <div class="flex justify-center mb-2">
          <button @click="openModalLogin" class="border border-gray-500 p-2 rounded-xl hover:bg-green-400">
            Acessar
          </button>
        </div>

        <ul class="flex-row justify-between">
          <li class="mx-2">
            <router-link to="/" class="text-blue-600 font-bold hover:underline"> Inicio </router-link>
          </li>

          <li class="mx-2"> <router-link to="/"></router-link>
            <a href="#"> Masculino</a>
          </li>
          <li class="mx-2"> <a href="#" class="hover:underline"> Feminino </a> </li>
          <li class="mx-2"> <a href="#" class="hover:underline"> Infantil </a> </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import logoIcon from "@/assets/icon/logoIcon.vue"
import menuIcon from "@/assets/icon/menuIcon.vue"
import openEyeIcon from "@/assets/icon/openEyeIcon.vue"
import closeEyeIcon from "@/assets/icon/closeEyeIcon.vue"
import loadingIcon from "@/assets/icon/loadingIcon.vue"

import basedModalComponente from "@/components/Base/basedModalComponente.vue"
import axios from "axios"

export default {
  data() {
    return {
      loading: false,
      menu: {
        show: false,
        class: 'hidden'
      },
      modalLogin: {
        show: false,
        login: null,
        password: null,
        warning: {
          class: '',
          mensage: '',
          show: false
        }
      },
      hiddenPassword: {
        type: 'password',
        show: true
      }     
    }
  },
  components: {
    logoIcon,
    menuIcon,
    openEyeIcon,
    closeEyeIcon,
    loadingIcon,
    basedModalComponente,
  },
  methods: {
    openMenu() {

      if (!this.menu.show) {
        this.menu.show = true
        this.menu.class = 'block'
        return
      }

      this.menu.show = false
      this.menu.class = 'hidden'
    },
    openModalLogin() {

      if (!this.modalLogin.show) {
        this.modalLogin.show = true
        this.menu.show = true
        this.menu.class = 'hidden'
      }

    },
    closeModal() {
      this.modalLogin.show = false;
      this.menu.show = false;
    },
    logar() {
      
     this.loading = true

      let data = {
        login: this.modalLogin.login,
        password: this.modalLogin.password
      }

      axios({
        method: 'post',
        url: 'http://localhost:8081/user/login',
        data: data
      }).then(res => {

        let { status, mensage } = res.data;

        if (status >= 400 ) {
          this.modalLogin.warning.class = 'bg-red-600'
          this.modalLogin.warning.show = true
          this.modalLogin.warning.mensage = mensage

          setInterval( () =>   this.modalLogin.warning.show = false ,3500 )
        }

        if( status >= 200  && status <= 299 ){
          this.modalLogin.warning.class = 'bg-green-600'
          this.modalLogin.warning.show = true
          this.modalLogin.warning.mensage = mensage

          setInterval( () =>  this.modalLogin.warning.show = false ,4500 )
        }      

        this.loading = false;
      }).catch( () => {             
        this.modalLogin.warning.class = 'bg-red-600'
        this.modalLogin.warning.show = true
        this.modalLogin.warning.mensage = 'Problema encontrado com a conexão no servidor.'        
        this.loading = false;        
      })
     
    },
    showPassword() {

      if (this.hiddenPassword.show) {
        this.hiddenPassword.type = 'text'
        this.hiddenPassword.show = false
        return
      }

      this.hiddenPassword.type = 'password'
      this.hiddenPassword.show = true

    }
  }
}
</script>
<style></style>