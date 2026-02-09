<template>
  <header class="header">
    <div class="container headerInner">
      <RouterLink class="brand" to="/">frisbski</RouterLink>
      <nav class="nav" aria-label="Primary">
        <RouterLink class="navLink" to="/">Home</RouterLink>
        <RouterLink class="navLink" to="/about">About</RouterLink>
        <RouterLink class="navLink" to="/rules">Rules</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
