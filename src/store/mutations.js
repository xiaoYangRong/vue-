//状态值的改变方法啊，操作状态值
//提交mutations是更改vuex状态的唯一方法
export const clickAFn=(state,name)=>{//A组件更新餐馆名
  state.resturantName=name
  try
  {
    window.localStorage.setItem('resturantName', JSON.stringify(state.resturantName));  // array -> string

// 数据改变的时候把数据拷贝一份保存到localStorage里面
  }
  catch (e) {

  }

}
export const clickBFn=(state,name)=>{//A组件更新餐馆名
  state.resturantName=name
  try
  {
    window.localStorage.setItem('resturantName', JSON.stringify(state.resturantName));// array -> string

// 数据改变的时候把数据拷贝一份保存到localStorage里面
  }
  catch
    (e) {}
}
