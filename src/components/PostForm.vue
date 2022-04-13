<template>
    <form @submit.prevent="onFormSubmit">
        <input type="text" placeholder="title" v-model="title" required>
        <input type="text" placeholder="body" v-model="body" required>
        <button type="submit">Create Post</button>
    </form>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                title: '',
                body: '',
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            onFormSubmit() {
                this.createPost({
                    title: this.title,
                    body: this.body,
                    id: Date.now()
                })

                this.title = ''
                this.body = ''
            }
        }
    }
</script>

<style scoped>
    input {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>
