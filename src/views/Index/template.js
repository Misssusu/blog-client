import blog from "@/api/blog.js";

window.blog = blog;

export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page: 1
        }
    },
    created() {   //生命周期函数，模板还没有渲染，数据已经完成时
        blog.getIndexBlogs().then(res => {
            console.log(res)
            this.blogs = res.data;
            this.total = res.total;
            this.page = res.page;
        })
    },
    methods: {
        onPageChange(newPage) {
            console.log(newPage)
            blog.getIndexBlogs({ page: newPage }).then(res => {
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
            })
        }
    }
}