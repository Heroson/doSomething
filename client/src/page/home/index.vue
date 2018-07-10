<template>
  <div class="home_container">
    <<!-- itemcontainer father-component></itemcontainer> -->
    <h1>Hello World!</h1>
  </div>
</template>

<script>
  import itemcontainer from '../../components/itemcontainer'

  export default {
    name: 'home',
    components: {
      itemcontainer
    },
    created(){

    }
  }
</script>