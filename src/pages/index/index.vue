<template>
  <div class="app">
      Hello World!!
  </div>
</template>

<script>

export default {
  mpType: 'page',
  components: {
     
  },
  data() {
    return {
      
    }
  },
  beforeCreate() {
    console.log('Page Vue beforeCreate')
  },
  created() {
  
  },
  beforeMount() {
    console.log('Page Vue beforeMount')
  },
  mounted() {
    console.log('Page Vue mounted')
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log('Page onLoad')
  },
  onReady: function() {
    // Do something when page ready.
    console.log('Page onReady')
  },
  onShow: function() {
    // Do something when page show.
    console.log('Page onShow')
  },
  onHide: function() {
    // Do something when page hide.
    console.log('Page onHide')
  },
  onUnload: function() {
    // Do something when page close.
    console.log('Page onUnload')
  },
  /**
   * for other event handlers, please check https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#Page/
   */
  methods:{
    
  }
}
</script>

<style lang="less" scoped>

</style>
