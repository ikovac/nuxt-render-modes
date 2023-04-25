<template>
  <div>
    <Header />
    <h1>SSG page</h1>
    <p>{{ date }}</p>
  </div>
</template>

<script setup>
console.log("SSG page");
const date = new Date();
</script>
