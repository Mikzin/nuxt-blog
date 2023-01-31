<template>
        <section class="post-list">
        <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png"
        title="Hello there"
        previewText="This is the first post here" />
        <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png"
        title="Hello there"
        previewText="This is the second post here" />
        <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png"
        title="Hello there"
        previewText="This is the third post here" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
   .post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>