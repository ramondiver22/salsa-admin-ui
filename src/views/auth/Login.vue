<template>
  <v-layout class="flex justify-center align-center">
    <v-card width="300" class="text-center">
      <v-card-title>
        <h2 class="mt-2">Salsa</h2>


      </v-card-title>
      <v-card-subtitle>Type your credentilas to enter</v-card-subtitle>
      <v-card-text>
        <text-field label="Email" v-model="auth.email" />

        <text-field label="Password" v-model="auth.password" />

        <v-btn block color="primary">Login</v-btn>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script lang="ts">
import TextField from '@/components/text-field/Index.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TextField },
  data() {
    return {
      auth: { email: '', password: '' }
    }
  }
})

</script>