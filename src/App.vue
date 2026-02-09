<template>
  <div class="app">
    <SiteHeader />
    <main class="page" role="main">
      <RouterView />
    </main>
    <footer class="footer">
      <div class="container">
        <p class="footerText">Frisbski Official Webpage</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
</script>
