export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Inside test middleware");
  const random = Math.random() < 0.5;
  console.log("Abort: ", !random);
  if (!random) return abortNavigation();
  console.log("Navigation happened");
});
