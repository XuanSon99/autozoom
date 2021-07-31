<template>
  <footer v-if="!$route.meta.footer">
    <span class="back-btn" @click="$router.back()">
      <i class="fas fa-arrow-left"></i>Back
    </span>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>