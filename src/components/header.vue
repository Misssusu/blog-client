<template>
  <header :class="{login : isLogin, 'no-login' : !isLogin}">
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/signin">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/signup">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">Let's share</router-link></h1>
      <router-link to="/create">
        <i class="edit el-icon-plus"></i>
      </router-link>
      <div class="user">
        <div class="dropdown">
          <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        </div>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/profile">
              <i class="iconfont">&#xe61b;</i>
              <span>我的</span>
            </router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">
              <i class="iconfont exit">&#xe64b;</i>
              <span>注销</span>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </header>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },
    created() {   //生命周期，在实例创建完成后被立即调用
      this.checkLogin()
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout(){
        this.logout().then( res => {
          this.$router.push('/')
        })
      }
    }
  };
</script>
<style lang="scss">
@import "../assets/base.scss";
@font-face {
  font-family: 'iconfont';  /* project id 1341786 */
  src: url('//at.alicdn.com/t/font_1341786_t91t9ur1d.eot');
  src: url('//at.alicdn.com/t/font_1341786_t91t9ur1d.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1341786_t91t9ur1d.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1341786_t91t9ur1d.woff') format('woff'),
  url('//at.alicdn.com/t/font_1341786_t91t9ur1d.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1341786_t91t9ur1d.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
header.no-login {
  padding: 0 12% 30px 12%;
  background: $bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}

header.login {
  display: flex;
  align-items: center;
  background: $bgColor;

  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }
  a {
    color: #fff;
  }
  .edit {
    color: #fff;
    font-size: 30px;
    vertical-align: middle;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    vertical-align: middle;
  }
  .user {
    position: relative;
    cursor: pointer;
    .dropdown {
      margin: 8px 24px 8px 16px;
    }
    .dropdown:before {
      content: '';
      box-sizing: border-box;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 7px solid #fff;
      position: absolute;
      top: 29px;
      right: 6px;
    }
    .dropdown-menu {
      display: none;
      min-width: 105px;
      border-radius: 0 0 4px 4px;
      position: absolute;
      list-style: none;
      box-shadow: 0 2px 8px rgba(0,0,0,.1);
      border: 1px solid #eaeaea;
      margin: 2px 0;
      padding: 0;
      background-color: #fff;
      i {
        color: $bgColor;
        font-size: 21px;
        vertical-align: middle;
        margin-right: 15px;
      }
      .exit {
        font-weight: bold;
      }
      span {
        vertical-align: middle;
        font-size: 14px;
      }
      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 10px 20px;
        line-height: 30px;

        &:hover {
          background-color: #eaeaea;
        }
      }

    }

    &:hover ul {
      display: block;
    }
  }
}
</style>
