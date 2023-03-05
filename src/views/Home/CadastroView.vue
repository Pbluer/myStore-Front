<template>
    <div class="sm:mx-16 md:mx-20 lg:mx-48">
        <div class="text-center mt-10">
            <h1 class="text-3xl font-bold">Cadastro</h1>
        </div>

        <form class="p-16" @submit.prevent="finalizarCadastro">
            <div class="flex flex-col mb-3">
                <label for="nome" class="text-xl mb-2">Nome</label>
                <input type="text" name="nome"
                    class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:border-gray-500">
            </div>

            <div class="flex flex-col mb-3">
                <label for="email" class="text-xl mb-2">E-mail</label>
                <input type="email" name="email"
                    class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:border-gray-500">
            </div>

            <div class="flex flex-col mb-3">
                <label for="password" class="text-xl mb-2">Senha</label>
                <input type="password" name="password"
                    class="h-8 pl-2 bg-gray-300 rounded-sm appearance-none focus:outline-none focus:border-2 focus:border-gray-500">
            </div>

            <div class="flex justify-center mt-6 ">
                <button
                    class="w-56 h-8 rounded-sm shadow-sm bg-transparent border-2 border-gray-600 hover:bg-gray-600  hover:text-white "
                    type="submit">
                    Finalizar
                </button>
            </div>

        </form>

    </div>
</template>
<script>
export default {
    name:'cadastroView',
    methods:{
        finalizarCadastro(){
            this.$router.push('/')
        }
    }
}
</script>
<style >
    
</style>