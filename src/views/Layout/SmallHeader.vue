<template>
<div style="display:flex; justify-content:space-between;">
    <h1>{{ title }}</h1>
    <v-btn v-if="btns" elevation="2" @click="$emit('go')">{{ btnName }}</v-btn>
</div>
</template>

<script>
export default {
    props: {
        title: {type:String, default:null},
        btnName: {type:String, default:null},
        btns: {type:Boolean, default:false},
    },
}
</script>

<style>

</style>