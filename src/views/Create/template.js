import blog from "@/api/blog.js"
import {Message} from "element-ui";

export default {
  data() {
    return {
      title: "",
      description: "",
      content: "",
      atIndex: ""
    };
  },
  methods: {
    onCreate() {
      if (this.title === "" || this.description === "" || this.content === "") {
        Message.error("内容不能为空");
      } else {
                blog.createBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex})
                    .then(res => {
                        this.$message.success(res.msg);
                        this.$router.push({path: `/detail/${res.data.id}`})
                    })
            }
        }
    }
}