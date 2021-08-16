<template>
    <div class="content">
        <div class="category">
            <ul>
            <li v-for="item in categories" :key="item.tab" @click="()=>handleCategoryClick(item.tab)" class="category__item">{{item.name}}</li>
            </ul>
        </div>
        <div class="product">
            <div class="product__item" v-for="item in contentList" :key="item._id">
                <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
                <div class="product__item__detail">
                    <h4 class="product__item__title">{{item.name}}</h4>
                    <p class="product__item__sales">月售{{item.sales}}件</p>
                    <p class="product__item__price">
                       <span class="product__item__yen">&yen;<span>{{item.price}}</span><span class="product__item__origin">&yen;{{item.oldPrice}}</span></span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus">-</span> 0
                    <span class="product__number__plus">+</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
export default {
  name: 'Content',
  setup () {
    const categories = [{
      name: '全部商品',
      tab: 'all'
    },
    {
      name: '秒杀',
      tab: 'seckill'
    },
    {
      name: '新鲜水果',
      tab: 'fruit'
    }]
    const data = reactive({
      contentList: []
    })
    const getContentData = async (tab) => {
      const result = await get('/api/shop/:id/products', {
        tab
      })
      if (result?.errno === 0 && result?.data?.length) {
        data.contentList = result.data
      }
    }
    const handleCategoryClick = (tab) => {
      console.log(tab)
      getContentData(tab)
    }
    getContentData('all')
    const { contentList } = toRefs(data)
    return { categories, contentList, handleCategoryClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
 .content{
     display: flex;
     position: absolute;
     left: 0;
     right: 0;
     top: 1.4rem;
     bottom: .5rem;
     .category{
         width: .76rem;
        background: $input-backgroundColor;
        height: 100%;
        overflow-y: scroll;
        ul{
            width: 100%;
            padding: 0;
            margin: 0;
        }
        &__item{
            list-style: none;
            width: 100%;
            height: .46rem;
            text-align: center;
            line-height: .46rem;
            color: $content-fontColor;
        }
         &--active{
                background: $bgColor;
            }
     }
     .product{
         flex: 1;
         overflow-y: scroll;
         &__item{
             position: relative;
             display: flex;
                padding: .12rem 0;
                margin: 0 .16rem;
                border-bottom: .01rem solid $content-backgroundColor;
             &__img{
                 width: .68rem;
                 height: .68rem;
                 margin-right: .16rem;
             }
             &__detail{
                 overflow: hidden;
             }
             &__title{
              margin: 0;
             line-height: .2rem;
             color: $content-fontColor;
             font-size: .14rem;
             @include ellipsis;
         }
         &__sales{
             line-height: .16rem;
             margin: .06rem 0;
             color: $content-fontColor;
             font-size: .12rem;
         }
         &__price{
             margin: 0;
             line-height: .2rem;
             color: $font-color;
             font-size: .14rem;
         }
         &__yen{
             font-size: .12rem;
         }
         &__origin{
             font-size: .12rem;
             line-height: .2rem;
             color: #999;
             text-decoration: line-through;
             margin-left: .06rem;
         }
         }
         &__number{
             position:absolute ;
             right: 0;
             bottom: .12rem;
             &__minus,&__plus{
                 width: .2rem;
                 height: .2rem;
                 display: inline-block;
                 border: .01rem solid #666;
                 border-radius: 50%;
                 line-height: .16rem;
                 text-align: center;
                 font-size: .2rem;
                 box-sizing: border-box;
             }
             &__minus{
                 margin-right:.05rem ;
             }
             &__plus{
                 background: $border-color;
                 color: $bgColor;
                 border-color:$border-color ;
                 margin-left: .05rem;
             }
         }
     }
 }
</style>
