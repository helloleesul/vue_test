<template v-if="sheet">
  <v-bottom-sheet persistent>
    <v-sheet
      class="text-center"
      height="200px"
    >
      <v-btn
        class="mt-6"
        text
        color="red"
        @click="$emit('goto')"
      >
        {{ btn }}
      </v-btn>
      <div class="py-3">
        {{ description }}
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
props: {
  sheet: { type:Boolean, default: false },
  btn: { type:String, default: null },
  description: { type:String, default: null },
},
}
</script>

<style>
</style>