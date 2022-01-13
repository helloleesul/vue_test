<template>
  <Fragment>
    <ul>
      <li>message : {{message}}</li>
      <li>message.length : {{message.length >= 10 ? '10글자 이상':'10글자 미만'}}입니다.</li>
      <li>v-model.number : <input v-model.number="count" /></li>
      <li>Math.round(3.1) : {{Math.round(3.1)}}</li>
    </ul>
    <Test :text-content.prop="message" />
    <Test :scroll-top.prop="scroll" />
  </Fragment>
</template>

<script>
import Test from './Test.vue';
import { Fragment } from 'vue-fragment'
export default {
  name: 'Home',
  components: {Test, Fragment},
  data() {
    return {
      message: 'hello444',
      count: 1,
      scroll: 0
    }
  },
  mounted() {
    this.scroll=100
  }
}
</script>
