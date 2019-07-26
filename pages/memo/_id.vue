<template>
<div>
{{ memo.text }}
</div>
</template>

<script>
export default {
    computed: {
        memo: function() {
            return this.$store.getters.all('memo')
        }
    }
}
</script>