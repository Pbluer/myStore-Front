<template>  
  <div class="m-10">
    <div>
      <!-- Espaço para adicionar um slider ou então uma imagem fixa -->
    </div>
    <br>
    <searchListComponent>
      
    </searchListComponent>
  </div>
</template>

<script>

import searchListComponent from "@/components/Home/searchListComponent"

export default {
  name: 'HomeView',
  components: {
    searchListComponent
  }
}

</script>
