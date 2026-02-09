<template>
  <div>
    <section class="hero">
      <div class="heroMedia" aria-hidden="true">
        <img class="heroImg" src="/images/jump.jpg" alt="" />
        <div class="heroGlow"></div>
      </div>

      <div class="container heroContent">
        <div class="heroCard">
          <h1 class="heroTitle">Frisbski</h1>
          <p class="heroLead">
            Frisbski is a sport where 2 players take turns throwing and catching a frisbee in a skislope.
          </p>
          <div class="heroCtas">
            <RouterLink class="btn btnPrimary" to="/about">Details</RouterLink>
            <RouterLink class="btn btnGhost" to="/rules">Rules</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="blog">
      <div class="container">
        <div class="blogHeader">
          <h2 class="blogTitle">{{ current.title }}</h2>
        </div>
        <div class="blogBody">
          <div v-if="current.youtubeId" class="embed">
            <iframe
              class="embedFrame"
              width="560"
              height="315"
              :src="`https://www.youtube-nocookie.com/embed/${current.youtubeId}`"
              title="YouTube video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <p v-else class="blogEmpty">More videos coming soon.</p>
        </div>

        <div class="blogControls" role="group" aria-label="Blog navigation">
          <button class="iconBtn" type="button" @click="previous" aria-label="Previous">
            <span aria-hidden="true">\u2039</span>
          </button>
          <div class="blogDots" aria-label="Slides">
            <button
              v-for="(post, idx) in posts"
              :key="post.title"
              class="dot"
              type="button"
              :aria-label="`Go to ${post.title}`"
              :aria-current="idx === index ? 'true' : undefined"
              @click="index = idx" />
          </div>
          <button class="iconBtn" type="button" @click="next" aria-label="Next">
            <span aria-hidden="true">\u203A</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const posts = [
  {
    title: 'Blafjoll 3.1.2015 compilation',
    youtubeId: 'GM2DeCQ7GfU',
  },
  {
    title: 'Naesta Vidjo',
    youtubeId: null,
  },
]

const index = ref(0)
const current = computed(() => posts[index.value])

function next() {
  index.value = (index.value + 1) % posts.length
}

function previous() {
  index.value = (index.value - 1 + posts.length) % posts.length
}
</script>
