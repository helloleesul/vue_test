<template>
  <v-form justify="center" align="center" style="height:100%">
    {{data}}
    <v-row justify="center" align="center" style="height:100%">
      <v-col
        sm="10"
        md="8"
        lg="3"
      >
        <v-toolbar color="transparent" dense flat>
          <v-toolbar-title style= "width:100%">회원정보</v-toolbar-title>
        </v-toolbar>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              label="이름"
              readonly
              :value="data.name"
              required
            ></v-text-field>
            <v-text-field
              ref="email"
              label="이메일"
              readonly
              :value="data.email"
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              label="주소"
              readonly
              :value="data.address"
              required
            ></v-text-field>
            <v-row align="center">
              <v-col
                class="d-flex"
                cols="12"
                sm="6"
              >
              </v-col>
            </v-row>  
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text>
              취소
            </v-btn>
            <v-spacer></v-spacer>
          
            <v-btn
              color="primary"
              text
              @click="submit"
            >
              가입하기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
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