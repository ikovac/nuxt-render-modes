<template>
  <div>
    <Header />
    <h1>SWR page</h1>
    <p>{{ new Date() }}</p>
  </div>
</template>

<script setup>
console.log("Swr page");
definePageMeta({
  middleware: ["test"],
});
</script>
