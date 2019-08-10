import blog from '@/api/blog';
const state = {
    title: '',
    description: '',
    content: '',
    atIndex: false
}
const actions = {
    createBlog({ commit }, { title, description, content, atIndex}) {
        blog.createBlog({ title, description, content, atIndex})
            .then((resp)=>{console.log('success' + resp)})
    }
}
export default {
    state,
    actions
}
