<template>
  <Layout>
      <div>
          <h1>Post2</h1>
      </div>
  </Layout>
</template>

<page-query>
    query {
        posts: allPost {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
</page-query>
<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>