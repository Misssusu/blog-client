<template>
  <div id="signup">
    <h4>用户名</h4>
    <input type="text" v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input type="password" v-model="password" placeholder="密码" @keyup.enter="onRegister">
    <div class="btns">
      <el-button size="medium" @click="onRegister">立即注册</el-button>
    </div>
    <p class="notice">已有账号？<router-link to="/signin">立即登录</router-link></p>
  </div>
</template>
<script src="./template.js"></script>
<style lang="scss" src="./template.scss"></style>

