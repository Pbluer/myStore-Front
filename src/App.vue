<template>
  <HeaderComponente> </HeaderComponente>
  <router-view/>
</template>

<script>
import HeaderComponente from "@/components/HeaderComponente.vue"
export default {
  name: 'App',
  components: {
    HeaderComponente
  }
}
</script>
