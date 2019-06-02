import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
 Vue.use(Vuex)

//vuex 是 vue 的状态管理器，存储的数据是响应式的。但是并不会保存起来
// ，刷新之后就回到了初始状态，具体做法应该在vuex里数据改变的时候
// 把数据拷贝一份保存到localStorage里面，刷新之后，如果localStorage
// 里有保存的数据，取出来再替换store里的state。

//声明一个需要共同维护的状态state
const state={
  resturantName:'飞哥菜馆'
}

try
{
// 用户关闭了本地存储功能，此时在外层加个try...catch
  if
  (window.localStorage.getItem('resturantName')){
    state.resturantName = JSON.parse(window.localStorage.getItem('resturantName'))  // string -> array
    //这里需要注意的是：由于vuex里，我们保存的状态，都是数组，而localStorage只支持字符串，所以需要用JSON转换：
    //
    // JSON.stringify(state.subscribeList);   // array -> string
    // JSON.parse(window.localStorage.getItem("subscribeList"));    // string -> array
  }
}
catch (e){

}
const store=new Vuex.Store({
  state,//共享的数据或状态
  getters,//获取数据并渲染
  actions,//数据的异步操作
  mutations//处理数据的唯一途径
})
export default store//导出store
