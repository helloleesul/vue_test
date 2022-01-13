<template>
<div style="width: 50%; margin:5% auto;">
  <SmallHeader title="USER LIST" />
  <v-simple-table>
      <template v-slot:default >
        <thead>
          <tr>
            <th class="text-center">
              no
            </th>
            <th class="text-center">
              Name
            </th>
            <th class="text-center">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="$router.push(`/user/detail/${item.id}`)"
            v-for="item in data"
            :key="item.id"
          >
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">{{ item.email }}</td>
          </tr>
        </tbody>
      </template>
  </v-simple-table>
</div>
</template>
<script>
import SmallHeader from '../Layout/SmallHeader.vue';
  export default {
    name: 'UserList',
    components: {SmallHeader},
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
            const {data} = await this.$axios.get("/user");
            console.log(data);
            this.data = data.data;
        },
    }
  }
</script>