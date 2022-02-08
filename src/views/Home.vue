<template>
  <div class="home">
    <Navigation/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Navigation,
  },
});
</script>
