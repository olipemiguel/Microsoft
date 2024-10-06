<template>
  <MainView v-show="MainViews"/>
  <FooterView v-show="MainViews"/>
</template>

<script>
import MainView from './components/MainView.vue';
import FooterView from './components/FooterView.vue';
export default {
  name: 'App',
  components: {
    MainView,
    FooterView
  },
  data() {
    return {
      MainViews: true
    }
  }
}
</script>
<style>
</style>
