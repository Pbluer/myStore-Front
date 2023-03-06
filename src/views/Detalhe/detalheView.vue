<template>
    <div>
        <div class="flex bg-gray-400 px-6 items-center h-[2rem]">
            <button @click="$router.go(-1)">
                <arrowLeftIcon color="#fff" width="15px"></arrowLeftIcon>
            </button>
        </div>

        <div class="text-center my-4 text-2xl">
            <h1>{{ nome }}</h1>
        </div>

        <div class="flex justify-center mb-6">
            <img :src="getPhoto()" class="border-2 border-gray-400 shadow-lg rounded-md">
        </div>

        <div class="flex justify-center">
            <div v-for=" tech in tecnologias" :key="tech">
                <span class="border-2 border-gray-500 text-[0.8rem] rounded-lg m-1 px-2">{{ tech }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import arrowLeftIcon from '@/assets/icon/arrowLeftIcon.vue'

export default {
    beforeMount() {
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
            tecnologias: {
                value: null,
                required: true,
                type: Array
            }
        }
    },
    components: {
        arrowLeftIcon
    },
    methods: {
        loadData() {
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

            let { nome, price, tecnologias } = paginas.find(e => e.id == id)


            this.id.value = id
            this.nome = nome;
            this.price = price;
            this.tecnologias = tecnologias;

        },
        getPhoto(format = 'png') {
            let id = this.id.value

            if (!id) {
                return require(`@/assets/image/404.png`);
            }

            return require(`@/assets/image/${id}.${format}`);
        }
    }
}
</script>
