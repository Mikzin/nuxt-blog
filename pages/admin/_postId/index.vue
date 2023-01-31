<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {AdminPostForm},
  data() {
    return {
      loadedPost: {
        author: 'Mikhail',
        title: 'My awesome post',
        content: 'Amazing super interesting post',
        thumbnailLink: 'https://www.fidelity.com/bin-public/060_www_fidelity_com/images/tech-stocks-twitter.png'

      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>