<template>
  <div class="container">
    <Logo/>
    <ul>
      <li :key="memo.id" v-for="memo in $store.getters['memo/all']"><nuxt-link :to="{name: 'memo-id', params:{id: memo.id}}">{{ memo.text }}</nuxt-link></li>
    </ul>
    <nuxt-link to="/add">Add</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
  }
}
</script>
