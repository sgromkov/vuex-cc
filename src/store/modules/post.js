export default {
    actions: {
        async fetchPosts(ctx, {limit = 3}) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            const posts = await response.json();
            ctx.commit('updatePosts', posts)
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts = [newPost, ...state.posts]
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length;
        }
    },
}
