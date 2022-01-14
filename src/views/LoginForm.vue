<template>
  <v-form justify="center" align="center" style="height:100%">
    <v-row justify="center" align="center" style="height:100%">
      <v-col
          sm="10"
          md="8"
          lg="3"
      >
        <v-card ref="form">
          <v-toolbar color="transparent" dense flat>
            <v-toolbar-title style= "width:100%">L O G I N</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row justify="center" align="center" style="height:100%">
              <v-col sm="8">
                  <v-text-field
                    v-model="input.serviceId"
                    label="ID"
                    outlined
                  ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" align="center" style="height:100%">
              <v-col sm="8">
                <v-text-field
                  v-model="input.password"
                  label="Password"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn 
              color="blue"
              @click="login"
            >
              <span>Login</span>
            </v-btn>
          </v-card-text>
        </v-card>     
      </v-col>
    </v-row>    
  </v-form>
</template>

<script>
  export default {
    name: 'Login',

    data() {
        return {
            input:{
                serviceId: null,
                password: null,
            }
        }
    },

    methods: {
        async login(){
          console.log(this.input);
          const { data } = await this.$axios.post("/token", this.input);
          localStorage.setItem("token", data.data)
        }
    },
  }
</script>