<template>
  <div>
    <h1>{{message}}</h1>
    <h1>{{message.length}}</h1>
    <input v-model.number="count" />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      message: 'hello',
      count: 1,
    }
  },
}
</script>
