<template>
  <div class="wrapper">
    <img src="../../assets/login.png" class="wrapper__img" alt="" />
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
      v-model="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请确认密码"
        v-model="ensurement"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegisterClick">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick" >已有帐号去登陆</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
// 注册相关逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '', ensurement: '' })
  const handleRegisterClick = async () => {
    try {
      const result = await post('/api/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
        // alert('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
      // alert('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { username, password, ensurement, handleRegisterClick }
}
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, ensurement, handleRegisterClick } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()

    return { show, toastMessage, username, password, ensurement, handleRegisterClick, handleLoginClick }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &__img {
    width: 1.8rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    border-radius: 0.06rem;
    padding: 0 0.16rem;
    box-sizing: border-box;
    &__content {
      width: 100%;
      line-height: 0.48rem;
      background: transparent;
      border: none;
      outline: none;
      font-size: 0.16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: $border-color;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    color: $bgColor;
    font-size: 0.16rem;
    line-height: 0.48rem;
    text-align: center;
    border-radius: 0.04rem;
  }
  &__register-link {
    font-size: 0.14rem;
    color: $content-notice-fontColor;
    text-align: center;
  }
}
</style>
