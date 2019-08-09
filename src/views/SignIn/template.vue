<template>
  <div id="signin">
    <h4>用户名</h4>
    <input type="text" v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input type="password" v-model="password" placeholder="密码" @keyup.enter="onLogin">
    <div class="btns">
      <el-button size="medium" @click="onLogin">立即登录</el-button>
    </div>
    <p class="notice">没有账号？<router-link to="/signup">注册新用户</router-link></p>
  </div>
</template>
<script src="./template.js"></script>
<style lang="scss" src="./template.scss"></style>

