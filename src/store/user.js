import { ref } from 'vue'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
    const userInfo = ref({})

    const setUserInfo = (data) => {
        userInfo.value = data
    }

    return {
        userInfo,
        setUserInfo,
    }
})

export default useUserStore
