export default {
    methods:{
        getPhoto( photo, format = 'png' ){
        
            if( !photo ){
                return require(`@/assets/image/404.png`);
            }
    
            return require(`@/assets/image/${photo}.${format}`);
        }
    }
}