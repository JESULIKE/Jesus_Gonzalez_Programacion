<template>
  <v-layout class="rounded rounded-md">
   <cabezote
    :productos="articulos"
   ></cabezote>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">

      <slot
      />
    </v-main>
  </v-layout>
</template>
<script>
 
export default {
  props: {
    articulos: {
      type: Array,
      required: true,

    },
  },

}

</script>
