<template>
  <v-layout>
    <v-app-bar density="comfortable" color="success">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Salsa</v-app-bar-title>


    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item prepend-icon="mdi-home" @click="">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item prepend-icon="mdi-account" @click="">
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>


        <v-list-item prepend-icon="mdi-gamepad" @click="">
          <v-list-item-title>Games</v-list-item-title>
        </v-list-item>


        <v-list-item prepend-icon="mdi-account-group" @click="">
          <v-list-item-title>Roles</v-list-item-title>
        </v-list-item>

        <v-list-item prepend-icon="mdi-webhook" @click="">
          <v-list-item-title>Hooks</v-list-item-title>
        </v-list-item>

        <v-list-item prepend-icon="mdi-security" @click="">
          <v-list-item-title>Tokens</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  data() {
    return {
      drawer: true
    }
  },


})
</script>