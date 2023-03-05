<template>
    <div>
        <div class="bg-gray-400">
            <button @click="$router.go(-1)">Voltar</button>
        </div>

        <div class="text-center my-4 text-2xl">
            <h1>{{ nome }}</h1>
        </div>

        <div class="flex justify-center ">
            <img :src="getPhoto()" class="border-2 border-gray-400 shadow-lg rounded-md">
        </div>

        <div></div>
    </div>
</template>

<script>
export default {
    beforeMount(){
        this.loadData()
    },
    data() {
        return {
            id: {
                value: null,
                required: true,
                type: String
            },
            price: {
                value: null,
                required: true,
                type: Number
            },
            nome: {
                value: null,
                required: true,
                type: String
            },
            tecnologias:{
                value: null,
                required: true,
                type: Array
            }
        }
    },
    methods:{
        loadData(){
            let id = this.$route.params.id

            let paginas = [
                {
                    id: 1,
                    price: 100,
                    nome: 'Página 1',
                    img: '',
                    tecnologias: [
                        'PHP',
                        'MYSQL'
                    ]
                },
                {
                    id: 2,
                    price: 250,
                    nome: 'Página 2',
                    img: '',
                    tecnologias: [
                        'VUE.JS',
                        'NODE.JS',
                        'MYSQL'
                    ]
                },
                {
                    id: 3,
                    price: 200,
                    nome: 'Página 3',
                    img: '',
                    tecnologias: [
                        'VUE.JS',
                        'NODE.JS',
                        'MYSQL'
                    ]
                },
            ]

            let { nome, price, tecnologias } = paginas.find( e => e.id == id )
            

            this.id.value = id
            this.nome = nome;
            this.price = price;
            this.tecnologias = tecnologias;
                
        },
        getPhoto(format = 'png' ){
            let id = this.id.value

            if( !id ){
                return require(`@/assets/image/404.png`);
            }

            return require(`@/assets/image/${id}.${format}`);
        }
    }
}
</script>
