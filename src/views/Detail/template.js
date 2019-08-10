import marked from "marked";
import blog from "@/api/blog.js";
export default {
    data() {
        return {
            title: '',
            rawContent: '',
            user: {
                avatar: '',
                username: ''
            },
            createdAt: ''
        }
    },
    created() {
        this.blogId = this.$route.params.blogId;
        blog.getDetail({ blogId: this.blogId}).then(res => {
            console.log(res);
            this.title = res.data.title;
            this.rawContent = res.data.content;
            this.user = res.data.user;
            this.createdAt = res.data.createdAt;
        })
    },
    computed: {
        markDown() {
            return marked(this.rawContent)
        }
    }
}