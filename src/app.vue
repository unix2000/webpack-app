<template>
  <div>
    <mu-appbar title="Title">
      <mu-icon-button icon='menu' slot="left"/>
      <mu-icon-button icon='expand_more' slot="right"/>
    </mu-appbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>

<style>

</style>