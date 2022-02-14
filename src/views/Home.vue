<template>
  <div class="home">
    <Navigation/>
     <div class="site-main">
      <div class="site-main-inner">
        <div class="home-section">
          <div class="home-section-inner">
            <div class="home-heading">Hi, I'm Ravi,</div>
            <h2 class="home-subheading">
              a software engineer specialized in<br />
              <strong>front-end </strong> web development.
            </h2>
          </div>
        </div>
      </div>
    </div>
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
