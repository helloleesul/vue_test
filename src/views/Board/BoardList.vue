<template>
<div style="width: 50%; margin:5% auto;">
  <SmallHeader btnName="등록" :btns="true" title="BOARD LIST"
  @go="$router.push('/board/create')"
   />
  <v-simple-table>
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
          @click="$router.push(`/board/${item.id}`)"
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
import SmallHeader from '../Layout/SmallHeader.vue';
  export default {
    name: 'BoardList',
    components: {SmallHeader},
    data () {
      return {
        data: null,
      }
    },
    mounted(){
        this.get();
    },
    methods: {
        async get(){
            const {data} = await this.$axios.get("/board",{
              Headers: {
                Authorization: localStorage.getItem("token"),
              }
            });
            console.log(data);
            
            this.data = data.data;
        },
    }
  }
</script>