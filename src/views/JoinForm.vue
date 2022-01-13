<template>
  <v-form justify="center" align="center" style="height:100%">
    <v-row justify="center" align="center" style="height:100%">
      <v-col
        sm="10"
        md="8"
        lg="3"
      >
        <v-toolbar color="transparent" dense flat>
          <v-toolbar-title style= "width:100%">회 원 가 입</v-toolbar-title>
        </v-toolbar>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="input.name"
              label="이름"
              required
            ></v-text-field>
            <v-text-field
              ref="email"
              v-model="input.email"
              label="이메일"
              required
            ></v-text-field>
            <v-text-field
              ref="password"
              v-model="input.password"
              type="password"
              label="비밀번호"
              required
            ></v-text-field>
            <v-text-field
              ref="confirmPassword"
              v-model="input.confirmPassword"
              type="password"
              label="비밀번호 재확인"
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="input.address"
              label="주소"
              counter="25"
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
    <modal :sheet="sheet2" btn="로그인하러 가기" description="회원가입이 완료 되었습니다." v-on:goto="goto">
    </modal>
  </v-form>
</template>


<script>
import Modal from './Layout/Modal.vue';
  export default {
    name: 'Join',
    components: { Modal },
    data() {
        return {
            input:{
                name: null,
                serviceId: "",
                password: null,
                address: null,
                email: null
            },
            sheet2: false,
        }
    },
    methods: {
        async submit(){
          this.input.serviceId = this.input.email !== "" ? this.input.email : "";

          const success = await this.$axios.post("/user/create", this.input);
          console.log(success)
          if (success.data.code === '0000') {
            this.sheet2 = true;
          } 

        },
        goto() {
          this.$router.push('/login');
        }
    },
  }
</script>