
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    // console.log(obj)
    window.onNuxtReady(() => {
        createPersistedState({
            key: 'key',//可以使任意字符
            paths: []
        })(store)
    })
}