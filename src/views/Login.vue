<template>
  <div id="login-container">
    <div id="login-box">
      <div id="avatar-box">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="iconfont icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password>
            <i slot="prefix" class="iconfont icon-3702mima"></i>
          </el-input>
        </el-form-item>
        <!-- layout布局 -->
        <el-row>
          <el-col :push="16">
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button type="info" @click="resetForm()">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 表单校验
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 对整个表单进行校验
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (valid) {
          var { data: dt } = await this.$http.post("login", this.loginForm);
          // console.log(dt);
          if (dt.meta.status !== 200) {
            return this.$message.error(dt.meta.msg);
          }
          // 把服务器端返回的token令牌存储好
          window.sessionStorage.setItem("token", dt.data.token);
          this.$router.push("/home");
        }
      });
    },
    // 表单重置
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<style scoped lang="less">
#login-container {
  background-color: #1fa1e2;
  height: 100%;
  overflow: hidden;
  #login-box {
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    #avatar-box {
      width: 120px;
      height: 120px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px 5px #5aee86cc;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .el-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
    }
  }
}
</style>
