<template>
    <div class="container-search">
      <div class="w-full flex justify-center">
        <input type="text" v-on:change="seachByName(search)" v-model="search" placeholder="Buscar. . ." class="border border-gray-900 shadow-sm relative h-10 px-2 rounded-lg focus:outline-none w-[20rem]"> 
      </div>
    
      <div class="mt-10 
      sm:grid
      sm:grid-cols-2
      lg:grid-cols-3">
        <div v-for=" (pagina,index) in paginas" :key="index" class="flex flex-col items-center px-6 my-3">
            <div class="rounded-lg shadow-sm border-2 w-[16rem] border-gray-200 py-4 px-2 hover:shadow-md hover:border-gray-500" @click="detailPag(pagina.id)">
              <h2 class="text-center">{{ pagina.nome }}</h2>
              <br>
              <div>
                <img :src="getPic(pagina.id)" alt="">
              </div>
              <div class="flex justify-center">
                <div v-for=" (tech,index) in pagina.tecnologias" :key="index" >
                  <span class="border-2 border-gray-500 text-[0.8rem] rounded-lg m-1 px-2">{{ tech }}</span>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
</template>

<script>

export default {
    name: 'HomeView',
    data(){
      return{
        search: null,
        paginas:[
          {
            id: 1,
            price: 100,
            nome: 'Página 1',
            img:'',
            tecnologias: [
              'PHP',
              'MYSQL'
            ]
          },
          {
            id: 2,
            price: 250,
            nome:'Página 2',
            img:'',
            tecnologias:[
              'VUE.JS',
              'NODE.JS',
              'MYSQL'
            ]
          },
          {
            id: 3,
            price: 200,
            nome:'Página 3',
            img:'',
            tecnologias:[
              'VUE.JS',
              'NODE.JS',
              'MYSQL'
            ]
          },
        ]
      }
    },
    components: {
    },
    methods:{
      seachByName(value){
        this.paginas.forEach( pag => {
          if( pag.nome.indexOf( value ) ){
            return
          }
        } )
      },
      detailPag(id){
        return this.$router.push({
          name:'detalhe',
          params:{ id: id }
        });
      },
      getPic(imagem) {
/*         const NOTFOUND = "";
        if (imagem == undefined) {
          return NOTFOUND;
        } */
        return require("@/assets/" + imagem + ".png");
    },
    }
}
</script>