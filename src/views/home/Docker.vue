<template >
  <div class='docker'>
    <span v-for="( item, index ) in dockerList" :key="index" :class="{'docker__item':true, 'docker__item--active':index === 0}" class='docker__item '>
      <div class='iconfont' v-html="item.icon" />
      <div class='docker__title'>{{item.text}}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6fb;', text: '首页' },
      { icon: '&#xe603;', text: '购物车' },
      { icon: '&#xe608;', text: '订单' },
      { icon: '&#xe609;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/viriables.scss';
.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01px solid $content-backgroundColor;
  padding: 0 0.18rem;
  box-sizing: border-box;
  &__item {
    flex: 1;
    text-align: center;
    color: $content-fontColor;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
