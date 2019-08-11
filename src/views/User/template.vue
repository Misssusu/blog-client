<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username">
      <h3>{{user.username}}</h3>
    </section>
    <section v-for="blog in blogs" :key="blog.id">
      <router-link class="item" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
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

