<template>
  <div>
    <h1 class="text-h1">{{ data }}</h1>
    <p>years of development experience</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Number,
    },
  },
};
</script>

<style>
</style>