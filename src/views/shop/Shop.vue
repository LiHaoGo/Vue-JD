<template>
<div class="wrapper">
    <div class="search">
        <div @click="handleBackClick" class="search__back"><span class="iconfont">&#xe61d;</span></div>
        <div class="search__content">
            <span class="search__content__icon iconfont">&#xe604;</span>
            <input class="search__content__input" type="text" placeholder="请输入商品名称">
        </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-if="item.imgUrl" />
    <Content />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
import Content from '../../views/shop/Content'
import { get } from '../../utils/request'
// 获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}
// 点击回退逻辑
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'Shop',
  components: { ShopInfo, Content },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    getItemData()
    const { handleBackClick } = useBackRouterEffect()
    return { item, handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/iconfont.css';
@import '../../style/viriables.scss';
.wrapper{
    padding: 0 .18rem;
}
.search{
    height: .32rem;
    margin: .14rem 0 .04rem 0;
    display: flex;
    &__back{
    width: .3rem;
    height: .32rem;
    color: $content-notice-fontColor;
    .iconfont{
        font-size: .3rem;
          line-height: .32rem;
    }
    }
    &__content{
        flex: 1;
        line-height: .32rem;
        background: $input-backgroundColor;
        border-radius: .16rem;
        padding: 0 .1rem;
        box-sizing: border-box;
        position: relative;
        &__icon{
        position: absolute;
        }
        &__input{
            border: none;
            outline: none;
            height: .32rem;
            width: 100%;
            padding: 0 .08rem 0 .2rem;
            box-sizing: border-box;
            background: transparent;
            color: $content-notice-fontColor;
        }
    }
}
</style>
