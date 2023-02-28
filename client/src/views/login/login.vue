<template>
  <div class="login-container">
    <el-form
      :label-position="right"
      label-width="100px"
      :model="formLabelAlign"
      class="login-form-container"
      size="large"
    >
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="formLabelAlign.code" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import "./login.less";

const labelPosition = ref("right");

const formLabelAlign = reactive({
  name: "",
  password: "",
  code: "",
});
</script>
