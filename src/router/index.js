import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Father1 from '../../view/father1'
import vuexA from '../../view/vuexA'
import vuexB from '../../view/vuexB'
import attrs from '../../view/attrs'
import provide from '../../view/provide'
import ref from '../../view/ref'
Vue.use(Router)

export default new Router({
  routes: [
    {
      //方法一:props / $emit
      //方法二:$emit / $on
      path:'/',
      name:'father1',
      component:Father1
    },
    {
     //方法三:vuex兄弟之间传值
      path:'/a',
      name:'a',
      component:vuexA
    },
    {
      //方法三:vuex兄弟之间传值
      path:'/b',
      name:'b',
      component:vuexB
    },
    {
      //多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。
      // 但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，
      // 未免有点大材小用。为此Vue2.4 版本提供了另一种方法---- $attrs/
      //方法四：$attrs　/ $listeners //多级嵌套传递数据
      path:'/attrs',
      name:'attrs',
      component:attrs
    },
    {
      //方法五、provide/inject
      path:'/provide',
      name:'provide',
      component:provide
    },
    {
      //方法六、 $parent / $children　＆ ref
      path:'/ref',
      name:'ref',
      component:ref
    }
  ]
})
