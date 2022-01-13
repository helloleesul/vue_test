<template>
  <div>
    {{data}}
  </div>
</template>
<script>
  export default {
    name: 'UserDetail',
    data () {
      return {
        data: null
      }
    },
    mounted(){
      this.get();
    },
    computed: {
      id() {
        return this.$route.params.id;
      },
    },
    methods: {
      async get(){
          const {data} = await this.$axios.get('/user/'+this.id);
          console.log(data);
          this.data = data.data;
      },
    }
  }
</script>