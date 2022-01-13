<template>
  <v-form justify="center" align="center" style="height:100%">
    <v-row justify="center" align="center" style="height:100%">
      <v-col
        sm="10"
        md="8"
        lg="3"
      >
        <v-toolbar color="transparent" dense flat>
          <v-toolbar-title style= "width:100%">글 작성</v-toolbar-title>
        </v-toolbar>
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="title"
              v-model="input.title"
              label="제목"
              required
            ></v-text-field>
            <v-text-field
              ref="content"
              v-model="input.content"
              label="내용"
              required
            ></v-text-field>
          </v-card-text>
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
              작성완료
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <modal :sheet="sheet2" btn="확인" description="등록되었습니다!" v-on:goto="goto">
    </modal>
  </v-form>
</template>


<script>
import Modal from '../Layout/Modal.vue';
  export default {
    name: 'BoardCreate',
    components: { Modal },
    data() {
        return {
            input:{
                title: null,
                content: null,
                user: {
                  id:1
                }
            },
            sheet2: false,
        }
    },
    methods: {
        async submit(){
          const success = await this.$axios.post("/board", this.input);
          console.log(success);
          if (success.data.code === 200) {
            this.sheet2 = true;
          } 

        },
        goto() {
          this.$router.push('/board');
        }
    },
  }
</script>