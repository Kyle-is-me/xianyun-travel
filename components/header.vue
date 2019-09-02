<template>
  <header class="header">
    <el-row type="flex" justify="space-between" class="main">
      <div class="logo">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
      </div>

      <el-row type="flex" class="nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="air">国内机票</nuxt-link>
      </el-row>

      <div class="login">
        <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
      </div>
    </el-row>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  box-shadow: 0 2px 2px #ddd;
  .main {
    width: 1000px;
    margin: 0 auto;
  }
}
.logo {
  img {
    display: block;
    width: 156px;
    height: 42px;
    margin-top: 9px;
  }
}
.nav {
  flex: 1;
  margin-left: 20px;
  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
      color: #409eff;
      border-bottom: 5px solid #409eff;
    }
  }
  //该clas是nuxt会自动去匹配nuxt-link的to的值，如果url和to的值相等会自动去加上下面的值
  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}

.login {
  a {
    font-size: 14px;
    display: inline;
    border-bottom: 0;
    &:hover {
      text-decoration: underline;
      color: #409eff
    }
  }
}
</style>