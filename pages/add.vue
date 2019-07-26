<template>
  <form>
    <textarea v-model="text"></textarea>

    <button type="button" class="btn btn-primary" @click="save">
      Add
    </button>
  </form>
</template>

<script>
export default {
    data: function() {
        return {
            text: ''
        }
    },
    methods: {
        save() {
            this.$store.commit('memo/add', this.text);
            this.$router.push('/');
        }
    }
}
</script>