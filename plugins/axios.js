//这个文件封装了axios拦截器

import {Message} from 'element-ui'

export default function ({$axios,redirect}) {
    $axios.onError((err)=>{
        const {statusCode,message} = err.response.data
        //...重定向，还未使用


        if(statusCode === 400){
            Message.warning({message})
        }
    })
}