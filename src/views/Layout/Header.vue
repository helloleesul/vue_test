<template>
  <v-app-bar
  app
  color="green"
  dark
  >
    <router-link to="/">
      <span class="mr-2">홈</span>
      <v-icon>mdi-home</v-icon>
    </router-link>

    <router-link to="/about">
      <span class="mr-2">어바웃</span>
    </router-link>
    <router-link to="/board">
      <span class="mr-2">게시판</span>
    </router-link>
    <router-link to="/user">
      <span class="mr-2">회원목록</span>
    </router-link>

    <v-spacer></v-spacer>

    <router-link to="/join">
      <span class="mr-2">회원가입</span>
      <v-icon>mdi-account</v-icon>
    </router-link>
    <router-link to="/login">
      <span class="mr-2">로그인</span>
      <v-icon>mdi-login</v-icon>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>