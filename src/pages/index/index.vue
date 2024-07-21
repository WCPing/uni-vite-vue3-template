<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view class="text-area">
            <uni-icons type="bars" size="16"></uni-icons>
            <text class="title">{{ title }}</text>
        </view>
    </view>
</template>

<script>
import useUserStore from '../../store/user'
export default {
    data() {
        return {
            title: 'Hello',
        }
    },
    onLoad() {
        const user = useUserStore();
        user.setUserInfo({ userName: 'xiao u' });
        console.log(user.userInfo);
    },
    methods: {},
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
