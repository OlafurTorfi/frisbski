<template>
  <section class="container notFound">
    <p class="kicker">404</p>
    <h1>Page not found</h1>
    <p class="muted">The page you were looking for does not exist.</p>
    <div class="actions">
      <RouterLink class="btn btnPrimary" to="/">Go home</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
