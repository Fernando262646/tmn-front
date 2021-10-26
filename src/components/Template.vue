<template>
  <div>
    <Banner/>
    <UserInfo/>

    <div class="tmn-container">
      <Menu />
      <div class="tmn-content">

          <div class="tmn-panel">
            <br />
            Template
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: "Template",
  components: {
    Banner: defineAsyncComponent(() => import('./Banner.vue')),
    UserInfo: defineAsyncComponent(() => import('./UserInfo.vue')),
    Menu: defineAsyncComponent(() => import('./Menu.vue'))
  }
}
</script>

<style scoped>
.tmn-container {
  display: flex;
}
.tmn-content {
  width: 100%;
  text-align: center;
  color: white;
}
</style>
