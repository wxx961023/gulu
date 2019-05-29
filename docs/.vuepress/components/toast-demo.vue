<template>
    <div class="toast-wrapper" ref="wrapper">
        <d-button @click="showToast1">默认弹窗样式</d-button>
        <br><br>
        <d-button @click="showToast2">设置弹窗位置</d-button>
        <br><br>
        <d-button @click="showToast3">设置关闭时间</d-button>
        <br><br>
        <d-button @click="showToast4">设置手动关闭</d-button>
        <br><br>
        <d-button @click="showToast5">设置关闭回调</d-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Plugin from '../../../src/plugIn'
    import Toast from '../../../src/toast'
    import Button from '../../../src/button'

    Vue.use(Plugin) 
    Vue.component('d-toast', Toast)
    Vue.component('d-button', Button)


    export default {
        name: "toast-demo",
        methods: {
            showToast1() {
                this.$toast('出现中间位置自动关闭',{}, this.$refs.wrapper)
            },
            showToast2() {
                this.$toast('position设置弹窗位置',
                    {
                        position:'top',
                    },
                    this.$refs.wrapper
                )
            },
            showToast3() {
                this.$toast('duration设置自动关闭时间',
                    {
                        duration:1,
                    },
                    this.$refs.wrapper
                )
            },
            showToast4() {
                this.$toast('设置手动关闭按钮',
                    {
                        duration:-1,
                        closeButton: {
                            text: '关闭',
                        }
                    },
                    this.$refs.wrapper
                )
            },
            showToast5() {
                this.$toast('设置手动关闭回调函数',
                    {
                        duration:-1,
                        closeButton: {
                            text: '关闭',
                            callback() {
                                alert('弹窗被关闭了')
                            }
                        }
                    },
                    this.$refs.wrapper
                )
            }
        }
    }

</script>

<style scoped lang="scss">
    .toast-wrapper {
        padding: 20px;
        width: 100%;
        margin: 0 auto;
        height: 50vh;
        border: 1px solid #333333;
        position: relative;
        overflow: hidden;
    }
</style>
