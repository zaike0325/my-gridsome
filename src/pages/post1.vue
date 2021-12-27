<template>
    <div>
        <h1>Post 1</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{post.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Post1',
        data() {
            return {
                posts: []
            }
        },
        async created (){
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.posts = data
        }
    }
</script>

<style lang="scss" scoped>

</style>