<template>
    <div>
        <div class="popover-wrapper" >
            <d-popover class="pop" position="left" >
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向左冒泡</d-button>
            </d-popover>
            <d-popover class="pop">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向上冒泡</d-button>
            </d-popover>
            <d-popover class="pop" position="bottom">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向下冒泡</d-button>
            </d-popover>
            <d-popover class="pop" position="right">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向右冒泡</d-button>
            </d-popover>
            <br>
            <d-popover class="pop" position="left" trigger="hover">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向左冒泡</d-button>
            </d-popover>
            <d-popover class="pop" trigger="hover">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向上冒泡</d-button>
            </d-popover>
            <d-popover class="pop" position="bottom" trigger="hover">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向下冒泡</d-button>
            </d-popover>
            <d-popover class="pop" position="right" trigger="hover">
                <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
                <d-button>向右冒泡</d-button>
            </d-popover>
        </div>
    </div>
</template>

<script>
    import Button from '../../../src/Button'
    import Popover from '../../../src/Popover'
    export default {
        name: "popover-demo",
        components:{
            'd-popover':Popover,
            'd-button':Button,
        }
    }
</script>

<style scoped lang="scss">
    .pop{
        margin: 20px;
    }
</style>
