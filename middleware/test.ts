export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Inside test middleware");
  const random = Math.random() < 0.2;
  console.log("Random: ", random);
  if (!random) return;
});
