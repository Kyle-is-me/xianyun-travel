<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item prop="username" class="form-item">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item prop="password" class="form-item">
      <el-input placeholder="密码" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
        //二次验证
        this.$refs.form.validate((valid)=>{
            if(valid){
                // console.log(this.form);
                this.$axios({
                    url:'/accounts/login',
                    method:'post',
                    data:this.form
                }).then((res)=>{
                    console.log(res)
                    localStorage.setItem('xianyun_35',res.data.token)
                })
            }else{
                console.log('验证失败')
            }
        })
    }
  },
  mounted(){
      console.log(this.$store.state.user.userInfo.token)
  }
};
</script>


<style lang="less" scoped>
.form {
  padding: 25px;

  .form-item {
    margin-bottom: 20px;
  }

  .form-text {
      font-size: 12px;
      color:#409EFF;
      text-align: right;
      line-height: 1;
  }

  .submit {
      width: 100%;
      margin-top: 10px;
  }
}
</style>