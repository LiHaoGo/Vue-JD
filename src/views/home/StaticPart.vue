<template>
  <div class='position'>
    <span class='iconfont position__icon'>&#xe60a;</span>
    安徽省阜阳市临泉县老集镇
    <span class='iconfont position__notice'>&#xe630;</span>
  </div>
  <div class='search'>
    <span class='iconfont'>&#xe604;</span>
    <input type='text' placeholder='高端整机宠粉日' />
  </div>
  <div class='banner'>
    <img
      class='banner__img'
      src='http://www.dell-lee.com/imgs/vue3/banner.jpg'
      alt=''
    />
  </div>
  <div class='icons'>
    <div class='icons__item' v-for="item in iconstList" :key="item.id">
      <img
        class='icons__item__img'
        :src='item.imgUrl'
        alt=''
      />
      <p class='icons__item__desc'>{{item.text}}</p>
    </div>
  </div>
  <div class='gap'></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconstList = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        text: '超市便利'
      },
      {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        text: '菜市场'
      },
      {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        text: '水果店'
      },
      {
        id: 4,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        text: '鲜花绿植'
      },
      {
        id: 5,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        text: '医药健康'
      },
      {
        id: 6,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        text: '家居时尚'
      },
      {
        id: 7,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        text: '烘培蛋糕'
      },
      {
        id: 8,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        text: '签到'
      },
      {
        id: 9,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        text: '大牌免运'
      },
      {
        id: 10,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        text: '红包套餐'
      }
    ]
    return { iconstList }
  }
}
</script>
<style lang='scss' scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  margin-right: 0.24rem;
  @include ellipsis;
  &__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
    color: $content-fontColor;
  }
  &__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
    color: $content-fontColor;
  }
  color: $content-fontColor;
}
.search {
  line-height: 0.32rem;
  background: $input-backgroundColor;
  border-radius: 0.6rem;
  padding: 0 0.25rem;
  position: relative;
  margin-bottom: 0.12rem;
  input {
    border: none;
    background: transparent;
    line-height: 0.32rem;
    width: 100%;
    outline: none;
    color: $input-fontColor;
  }
  .iconfont {
    position: absolute;
    left: 0.05rem;
    top: 0.01rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontColor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-backgroundColor;
}
</style>
