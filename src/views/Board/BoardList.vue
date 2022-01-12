<template>
<div style="width: 50%; margin:5% auto;">
  <BoardHeader
  @go="$router.push('/board/new')"
   />
  <v-simple-table >
      <thead>
        <tr>
          <th class="text-center">
            no
          </th>
          <th class="text-center">
            Title
          </th>
          <th class="text-center">
            Writer
          </th>
          <th class="text-center">
            Hit
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
        @click="aa"
          v-for="item in data"
          :key="item.id"
        >
          <td class="text-center">{{ item.id }}</td>
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">{{ item.user.serviceId }}</td>
          <td class="text-center">{{ item.hit }}</td>
        </tr>
      </tbody>
  </v-simple-table>
</div>
</template>
<script>
import BoardHeader from './components/BoardHeader.vue';
  export default {
    name: 'BoardList',
    components: {BoardHeader},
    data () {
      return {
        data: null
      }
    },
    mounted(){
        this.get();
    },
    methods: {
        async get(){
            const {data} = await this.$axios.get("/board");
            console.log(data);debugger
            this.data = data.data;
        },
        aa: function() {
          alert();
        }
    }
  }
</script>