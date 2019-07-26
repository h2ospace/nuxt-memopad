<template>
  <div class="container">
    <Logo/>
    <ul>
      <li v-for="memo in memos"><nuxt-link :to="{name: 'memo-id', params:{id: memo.id}}">{{ memo.text }}</nuxt-link></li>
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
    memos () {
      return this.$store.state.memo.memos;
    }
  }
}
</script>
