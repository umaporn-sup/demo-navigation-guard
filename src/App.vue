<script setup></script>

<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home | </router-link>
      <router-link :to="{ name: 'Admin' }">Admin | </router-link>
      <router-link :to="{ name: 'ResourceManagement' }"
        >Resources |
      </router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>

    <router-view />
  </div>
</template>

<style scoped></style>
