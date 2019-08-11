<template>
  <div id="index">
    <section>
      <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}} <span>{{formatDate(blog.createdAt)}}</span></h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
              @current-change="onPageChange"
              :current-page="page"
              layout="prev, pager, next"
              :total="total">
      </el-pagination>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style lang="scss" src="./template.scss"></style>

