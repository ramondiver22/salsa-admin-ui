<template>
  <v-text-field variant="solo" density="comfortable" :label="label" v-model="model"></v-text-field>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  },

  computed: {
    model: {
      get() {
        return this.value
      },
      set(value: String) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>
