<template>
    <div id="app">
        <PostForm />
        <hr>
        <h1 class="count">Количество постов: {{postsCount}}</h1>
        <div class="post" v-for="post in allPosts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import PostForm from '@/components/PostForm'
    export default {
        name: 'App',
        computed: mapGetters(['allPosts', 'postsCount']),
        methods: mapActions(['fetchPosts']),
        async mounted() {
            this.fetchPosts({limit: 4})
        },
        components: {
            PostForm
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
        max-width: 500px;
    }

    .post {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 1rem;
    }

    .count {
        margin-bottom: 1rem;
    }
</style>
