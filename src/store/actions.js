//给actions 注册时间处理函数，当这个函数被触发时，将状态提交commit 到mutations中处理

export function clickAFn({ commit },name){
  return commit ('clickAFn',name)//方法名，参数
}
export function clickBFn({commit},name){
  return commit ('clickBFn',name)//方法名，参数
}
