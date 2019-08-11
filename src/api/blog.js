import request from '@/helpers/request';
const URL = {
    GET_LIST: '/blog',
    GET_DETAIL: '/blog/:blogId',
    CREATE: '/blog',
    UPDATE: '/blog/:blogId',
    DELETE: '/blog/:blogId'
}
export default {
    //获取博客
    getBlogs({page=1,userId,atIndex} = {page: 1}){  //atIndex是否设置在首页
        return request(URL.GET_LIST, 'GET', {page,userId,atIndex})
    },
    //获取设置在首页的博客
    getIndexBlogs({page=1} = {page: 1}){
        return this.getBlogs({page, atIndex: true})
    },
    //获取某个用户所有的博客
    getBlogsByUserId(userId, {page=1, atIndex} = {page: 1}){
        return this.getBlogs({userId, page, atIndex})
    },
    //获取详情
    getDetail({blogId}) {
        return request(URL.GET_DETAIL.replace(':blogId', blogId))
    },
    //更新博客
    updateBlog({blogId}, {title, content, description, atIndex}){
        return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', {title, content, description, atIndex})
    },
    //删除博客
    deleteBlog({blogId}){
        return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
    },
    //创建博客
    createBlog({title = '', content = '', description = '', atIndex = false} = {title:'', content:'', description:'', atIndex:false}){
        return request(URL.CREATE, 'POST', {title, content, description, atIndex})
    }
}