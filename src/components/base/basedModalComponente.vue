<template>
    <div class="absolute w-full h-[100%] z-10 bg-black/30">
        <slot name="main"> </slot>
        <slot name="loading">
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        </slot>
    </div>  
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>