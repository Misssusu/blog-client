import blog from '@/api/blog.js';


export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    };
  },
  created() {
    //生命周期函数，模板还没有渲染，数据已经完成时
    this.page = parseInt(this.$route.query.page) || 1;
    blog.getIndexBlogs({ page: this.page }).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page;
    });
  },
  methods: {
    onPageChange(newPage) {
      console.log(newPage);
      blog.getIndexBlogs({ page: newPage }).then(res => {
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({ path: "/", query: { page: newPage } });
      });
    }
  }
};
