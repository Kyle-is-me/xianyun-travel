

//用户管理
export const state = ()=> { 
    return{
        userInfo:{
        }
    } 
       
}

export const mutations = {
    //设置用户信息，mutations下的方法第一个参数固定是state
    // data不是必须的参数，是调用方法时传入的参数
    setUserInfo(state,data){
        state.userInfo = data
    },

    //退出登录，清空用户数据
    clearUserInfo(state){
        state.userInfo = {
            token:'',
            user:''
        }
    }
}